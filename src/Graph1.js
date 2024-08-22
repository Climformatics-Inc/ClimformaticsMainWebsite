import React, { useEffect } from 'react';
import * as d3 from 'd3';

const Graph1 = () => {
  useEffect(() => {
    d3.csv('./data.csv').then(data => {
      console.log(data);
      const svgWidth = 100, svgHeight = 50;
      const svg = d3.select('#graph').html("")
        .append('svg')
        .attr('width', svgWidth)
        .attr('height', svgHeight);

      // Convert 'value' to numerical values
      data.forEach(d => {
        d.value = +d.value; // Ensure 'value' is numeric
      });

      // Set up scales
      const xScale = d3.scaleBand()
        .domain(data.map(d => d.name)) // Assuming 'name' is categorical data
        .range([0, svgWidth])
        .padding(0.1);

      const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)]) // Assuming 'value' is numerical data
        .range([svgHeight, 0]);

      // Draw bars
      svg.selectAll('.bar')
        .data(data)
        .enter().append('rect')
        .classed('bar', true)
        .attr('x', d => xScale(d.name))
        .attr('y', d => yScale(d.value))
        .attr('height', d => svgHeight - yScale(d.value))
        .attr('width', xScale.bandwidth())
        .attr('fill', 'steelblue');

      // Add x-axis
      svg.append('g')
        .attr('transform', `translate(0,${svgHeight})`)
        .call(d3.axisBottom(xScale));

      // Add y-axis
      svg.append('g')
        .call(d3.axisLeft(yScale));
    });
  }, []);

  return <div id="graph"></div>;
};

export default Graph1;
