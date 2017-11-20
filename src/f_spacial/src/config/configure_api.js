import React from 'react';

export const api_routes = {
  schema: 'http://',
  namespace: 'slashdelta.com',
  datasets: [
    {
      name: "dblp",
      component: <span>DBLP</span>,
      stats: {
        nodes: 2384099,
        edges: 10394521
      },
      route: ':16197'
    },
    {
      name: "citeseerx",
      component: <span>CiteSeer<span style={{verticalAlign: '4px', fontSize : '80%'}}>X</span></span>,
      stats: {
        nodes: 2118122,
        selected: 1286659,
        edges: 10595956
      },
      route: ':16198'
    },
    {
      name: "ann",
      component: <span>ANN</span>,
      stats: {
        nodes: 19918,
        edges: 124812,
        diameter: 21,
        average_degree: 12.53,
        largest_connected_component_size: 19712,
      },
      route: ':16199'
    }
  ]
};

export function fetchStats() {
  //Update Stats of
  return null;
}
