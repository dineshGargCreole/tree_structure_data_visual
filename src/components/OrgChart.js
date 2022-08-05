import React, {useState, useEffect, useRef} from 'react'
import {DummyData} from '../data'
import Tree from 'react-d3-tree';
import { objData, krData, taskData } from '../obj';
import {treeData} from '../allData'

import '../App.css'

const containerStyles = {
width: '100vw',
height: '100vh',
}

function OrgChart() {
    let treeContainer = useRef();
    const tree = useRef()
    const [data, setData] = useState({});
    // const [allData, setAllData] = useState([])
    const [buffer, setBuffer] = useState([])
    const [translate, setTranslate] = useState();
    const [initialDepth, setInitialDepth] = useState(3);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const _dimesnsions = treeContainer?.getBoundingClientRect();
        setTranslate({
            x: _dimesnsions.width/3,
            y: _dimesnsions.height/10
        })
        setData(DummyData);
        setBuffer([DummyData]);
        // setAllData(treeData)
    }, [])
    
    const checkNodes = (parentNode, children) => {
        if(parentNode.children.length === 0) {
            parentNode.children.push(...children)
        } else {
            parentNode.children.forEach(childObj => {
                children.forEach(_childObj => {
                    if(!childObj.name === _childObj.name) {
                        parentNode.children.push(...children)
                    }
                })
            })
        }
    }

    const addNode = (nodeDatum) => {
        let childData = []
        if(nodeDatum.__rd3t.depth === 3) {
            childData = [...objData]
            const filteredChildData = childData.filter(obj => obj.parent === nodeDatum.name)
            const objParent = filteredChildData[0]?.parent;
            
            buffer[0].children.forEach(mission => {
                mission.children.forEach(strategy => {
                    strategy.children.forEach(benefit => {
                        if(benefit.name === objParent) {
                            checkNodes(benefit, filteredChildData);
                        }
                    })
                })
            });

        } else if(nodeDatum.__rd3t.depth === 4) {
            childData = [...krData]
            const filteredChildData = childData.filter(obj => obj.parent === nodeDatum.name)
            const krParent = filteredChildData[0].parent;

            buffer[0].children.forEach(mission => {
                mission.children.forEach(strategy => {
                    strategy.children.forEach(benefit => {
                        benefit.children.forEach(obj => {
                            if(obj.name === krParent) {
                                checkNodes(obj, filteredChildData);
                            }
                        })
                    })
                })
            });
        } else if(nodeDatum.__rd3t.depth === 5) {
            childData = [...taskData]
            const filteredChildData = childData.filter(obj => obj.parent === nodeDatum.name)
            const taskParent = filteredChildData[0].parent;

            buffer[0].children.forEach(mission => {
                mission.children.forEach(strategy => {
                    strategy.children.forEach(benefit => {
                        benefit.children.forEach(obj => {
                            obj.children.forEach(kr => {
                                if(kr.name === taskParent) {
                                    checkNodes(kr, filteredChildData);
                                }
                            })
                        })
                    })
                })
            });
        }
        
        const filteredChildData = childData.filter(obj => obj.parent === nodeDatum.name)
        if(filteredChildData[0]?.parent === nodeDatum.name) {
            nodeDatum.children.length===0 && nodeDatum.children.push(...filteredChildData)
        }
        
        return nodeDatum
    }

    const customNodeElement = ({nodeDatum, toggleNode}) => {
        
        return <g>
            <circle r="15" onClick={(e) => {
                e.preventDefault()
                addNode(nodeDatum);
                toggleNode()
            }} />
            <text fill="black" strokeWidth="1" x="20">
                {nodeDatum.name}
            </text>
            {nodeDatum.attributes?.department && (
                <text fill="black" x="20" dy="20" strokeWidth="1">
                    Department: {nodeDatum.attributes?.department}
                </text>
            )}
        </g>
    }

    const handleSearch = () => {
        function filter(array, name) {
            const getNodes = (result, object) => {
                if (object?.name?.includes(name)) {
                    console.log('obj', object)
                    setInitialDepth(object?.__rd3t?.depth || object?.depth)
                    result.push(object);
                    return result;
                }
          
                if (Array.isArray(object.children)) {
                    const children = object.children.reduce(getNodes, []);
                    if (children.length) {
                        result.push({ ...object, children })
                    };
                }
                return result;
            };
          
            return array.reduce(getNodes, []);
        }
        setData(filter(buffer, search))
    }

    const handleReset = () => {
        console.log('buffer', buffer)
        setInitialDepth()
        setData(buffer[0])
    }
    
  return (
    <div>
        <p>OrgChart</p>
        <div>
            <label>Search:</label>
            <input type={'text'} value={search} onChange={(e) => setSearch(e.target.value)} />
            <button type='button' onClick={handleSearch}>Click</button>
            <button type='button' onClick={handleReset}>Reset</button>
        </div>
        <div ref={tc => (treeContainer = tc)} style={containerStyles}>
            <Tree
                data={data}
                translate={translate}
                orientation={'vertical'}
                initialDepth={initialDepth}
                pathFunc={(linkDatum, orientation) => {
                    const { source, target } = linkDatum;
                    return orientation === 'diagonal'
                        ? `M${source.y},${source.x}L${target.y},${target.x}`
                        : `M${source.x},${source.y}L${target.x},${target.y}`;
                }}
                renderCustomNodeElement={customNodeElement}
                collapsible={true}
                ref={tree}
            />
        </div>
    </div>
  )
}

export default OrgChart