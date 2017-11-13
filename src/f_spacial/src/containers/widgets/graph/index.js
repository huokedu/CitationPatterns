import React from 'react';
import { Group } from '@vx/group';
import { Tree } from '@vx/hierarchy';
import { LinearGradient } from '@vx/gradient';
import { hierarchy } from 'd3-hierarchy';
import { pointRadial } from 'd3-shape';

import { LinkRadial } from '@vx/shape';
import { LinkRadialStep } from './step';

export default class extends React.Component {
  state = {
    layout: 'polar',
    orientation: 'horizontal',
    linkType: 'step'
  };

  render() {
    const {
      data,
      width,
      height,
      margin = {
        top: 30,
        left: 30,
        right: 30,
        bottom: 30
      }
    } = this.props;
    const { layout, linkType } = this.state;

    if (width < 10) return null;

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    let origin;
    let sizeWidth;
    let sizeHeight;

    if (layout === 'polar') {
      origin = {
        x: innerWidth / 2,
        y: innerHeight / 2
      }
      sizeWidth = 2 * Math.PI
      sizeHeight = Math.min(innerWidth, innerHeight) / 2
    }

    return (
      <div>
        <svg width={width} height={height}>
          <LinearGradient id="lg" from="#fd9b93" to="#fe6e9e" />
          <rect width={width} height={height} rx={14} fill="#272b4d" />
          <Tree
            top={margin.top}
            left={margin.left}
            root={hierarchy(data, d => (d.isExpanded ? d.children : null))}
            size={[
              sizeWidth,
              sizeHeight
            ]}
            separation={(a, b) => (a.parent === b.parent ? 1 : .5) / a.depth}
          >
            {({ data }) => (
              <Group
                top={origin.y}
                left={origin.x}
              >
                {data.links().map((link, i) => {

                  let LinkComponent;

                  if (layout === 'polar') {
                    if (linkType === 'step') {
                      LinkComponent = LinkRadialStep;
                    } else {
                      LinkComponent = LinkRadial
                    }
                  }

                  return (
                    <LinkComponent
                      data={link}
                      stroke="#374469"
                      strokeWidth="1"
                      fill="none"
                      key={i}
                    />
                  )
                })}

                {data.descendants().map((node, key) => {
                  const width = 40;
                  const height = 20;

                  let top;
                  let left;
                  if (layout === 'polar') {
                    const [radialX, radialY] = pointRadial(node.x, node.y);
                    top = radialY;
                    left = radialX;
                  }

                  return (
                    <Group top={top} left={left} key={key}>
                      {node.depth === 0 && (
                        <circle
                          r={12}
                          fill="url('#lg')"
                          onClick={() => {
                            node.data.isExpanded = !node.data.isExpanded;
                            console.log(node);
                            this.forceUpdate();
                          }}
                        />
                      )}
                      {node.depth !== 0 && (
                        <rect
                          height={height}
                          width={width}
                          y={-height / 2}
                          x={-width / 2}
                          fill={'#272b4d'}
                          stroke={node.data.children ? '#03c0dc' : '#26deb0'}
                          strokeWidth={1}
                          strokeDasharray={!node.data.children ? '2,2' : '0'}
                          strokeOpacity={!node.data.children ? 0.6 : 1}
                          rx={!node.data.children ? 10 : 0}
                          onClick={() => {
                            node.data.isExpanded = !node.data.isExpanded;
                            console.log(node);
                            this.forceUpdate();
                          }}
                        />
                      )}
                      <text
                        dy={'.33em'}
                        fontSize={9}
                        fontFamily="Arial"
                        textAnchor={'middle'}
                        style={{ pointerEvents: 'none' }}
                        fill={
                          node.depth === 0 ? (
                            '#71248e'
                          ) : node.children ? (
                            'white'
                          ) : (
                                '#26deb0'
                              )
                        }
                      >
                        {node.data.name}
                      </text>
                    </Group>
                  );
                })}
              </Group>
            )}
          </Tree>
        </svg>
      </div>
    );
  }
}
