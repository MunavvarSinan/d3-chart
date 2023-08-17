document.addEventListener('DOMContentLoaded', () => {
    const jsonData = [
        { 'Group': 'Group 1', 'Value': 0 },
        { 'Group': 'Group 1', 'Value': 0.00178 },
        { 'Group': 'Group 1', 'Value': 0.03935 },
        { 'Group': 'Group 1', 'Value': 0.03935 },
        { 'Group': 'Group 1', 'Value': 0.00009 },
        { 'Group': 'Group 1', 'Value': 0.02907 },
        { 'Group': 'Group 1', 'Value': 0.56388 },
        { 'Group': 'Group 2', 'Value': 1 },
        { 'Group': 'Group 2', 'Value': 1.10178 },
        { 'Group': 'Group 2', 'Value': 1.23935 },
        { 'Group': 'Group 2', 'Value': 1.03935 },
        { 'Group': 'Group 2', 'Value': 1.00009 },
        { 'Group': 'Group 2', 'Value': 1.02907 },
        { 'Group': 'Group 2', 'Value': 1.56388 },
        { 'Group': 'Group 3', 'Value': 5 },
        { 'Group': 'Group 3', 'Value': 4.00178 },
        { 'Group': 'Group 3', 'Value': 2.03935 },
        { 'Group': 'Group 3', 'Value': 2.03935 },
        { 'Group': 'Group 4', 'Value': 1 },
        { 'Group': 'Group 4', 'Value': 1.00178 },
        { 'Group': 'Group 4', 'Value': 3.03935 },
        { 'Group': 'Group 4', 'Value': 2.03935 },
        { 'Group': 'Group 4', 'Value': 5.00009 },
        { 'Group': 'Group 4', 'Value': 1.02907 },
        { 'Group': 'Group 4', 'Value': 4.56388 },
        { 'Group': 'Group 5', 'Value': 2 },
        { 'Group': 'Group 5', 'Value': 2.00178 },
        { 'Group': 'Group 5', 'Value': 1.03935 },
        { 'Group': 'Group 5', 'Value': 2.03935 },
        { 'Group': 'Group 5', 'Value': 4.00009 },
        { 'Group': 'Group 5', 'Value': 3.02907 },
        { 'Group': 'Group 5', 'Value': 2.56388 },
        { 'Group': 'Group 6', 'Value': 3 },
        { 'Group': 'Group 6', 'Value': 4.00178 },
        { 'Group': 'Group 6', 'Value': 3.03935 },
        { 'Group': 'Group 6', 'Value': 2.03935 },
        { 'Group': 'Group 6', 'Value': 3.00009 },
        { 'Group': 'Group 6', 'Value': 1.02907 },
        { 'Group': 'Group 6', 'Value': 3.56388 },
    ];
    //     const groups = Array.from(new Set(jsonData.map(item => item.Group))); // Extract unique groups
    //     const colorScale = d3.scaleOrdinal().domain(groups).range(d3.schemeCategory10);

    //     const margin = { top: 20, right: 20, bottom: 40, left: 60 };
    //     const width = 600 - margin.left - margin.right;
    //     const height = 400 - margin.top - margin.bottom;

    //     const svg = d3.select('#scatter-chart')
    //         .append('svg')
    //         .attr('width', width + margin.left + margin.right)
    //         .attr('height', height + margin.top + margin.bottom)
    //         .append('g')
    //         .attr('transform', `translate(${margin.left},${margin.top})`);

    //     const xScale = d3.scaleBand().domain(groups).range([0, width]).padding(0.1);

    //     const maxDataValue = d3.max(jsonData, d => d.Value);
    //     const yScale = d3
    //         .scaleLinear()
    //         .domain([0, Math.ceil(maxDataValue / 0.05) * 0.05])
    //         .nice()
    //         .range([height, 0]);

    //     const radiusScale = d3.scaleSqrt().domain([0.01, 0.1]).range([1, 2]);

    const tooltip = d3
        .select('body')
        .append('div')
        .attr('class', 'tooltip')
        .style('position', 'absolute')
        .style('background-color', 'rgba(0, 0,0 , 0.72)')
        .style('border', '1px solid #ccc')
        .style('padding', '5px')
        .style('pointer-events', 'none')
        .style('opacity', 0)
        
    //     const formatValue = d3.format('.5f');
    //     const circles = svg
    //         .selectAll('.circle-group')
    //         .data(groups)
    //         .enter()
    //         .append('g')
    //         .attr('class', 'circle-group')
    //         .selectAll('circle')
    //         .data(group => jsonData.filter(item => item.Group === group))
    //         .enter()
    //         .append('circle')
    //         .attr('cx', d => xScale(d.Group) + xScale.bandwidth() / 2 + (Math.random() - 0.5) * 25)
    //         .attr('cy', d => yScale(d.Value))
    //         .attr('r', d => radiusScale(d.Value))
    //         .attr('fill', d => colorScale(d.Group))
    //         .on('mouseover', function (d, i) {

    // const group = d.Group;
    // const circle = d3.select(this);
    // const circleX = parseFloat(circle.attr('cx'));
    // const circleY = parseFloat(circle.attr('cy'));
    // const value = formatValue(d.Value);

    // tooltip
    //     .html(`<strong>Group:</strong> ${i.Group}<br /><strong>Value:</strong> ${i.Value}`)
    //     .style('left', circleX + 'px')
    //     .style('top', circleY + 'px')
    //     .style('opacity', 1);

    // d3.selectAll('circle').style('opacity', 0.5); // Reduce opacity of all circles
    // circle.style('opacity', 1); // Keep opacity of the hovered circle full
    // circle.style('cursor', 'pointer');
    // circle.style('stroke', 'black');
    // circle.style('stroke-width', '1px');

    //         })
    //         .on('mouseout', function () {
    // tooltip.style('opacity', 0);
    // d3.selectAll('circle').style('opacity', 1); // Restore opacity of all circles
    // d3.select(this).style('stroke', 'none'); // Remove the border when not hovered

    //         });

    //     const xAxis = d3.axisBottom(xScale);
    //     const xAxisGroup = svg
    //         .append('g')
    //         .attr('class', 'x-axis')
    //         .attr('transform', `translate(0, ${height})`)
    //         .call(xAxis);

    //     xAxisGroup.selectAll('.tick')
    //         .each(function (d) {
    //             const groupColor = colorScale(d);
    //             const groupData = jsonData.filter(item => item.Group === d);

    //             const rectWidth = groupData.length * 10 + 5;
    //             const rectHeight = 10;

    //             d3.select(this)
    //                 .append('rect')
    //                 .attr('x', -rectWidth / 2)
    //                 .attr('y', -10)
    //                 .attr('width', rectWidth)
    //                 .attr('height', rectHeight)
    //                 .attr('fill', groupColor);
    //         });

    //     const yAxis = d3.axisLeft(yScale);
    //     svg.append('g').attr('class', 'y-axis').call(yAxis);
    // });
    const groups = Array.from(new Set(jsonData.map(item => item.Group))); // Extract unique groups
    const colorScale = d3.scaleOrdinal().domain(groups).range(d3.schemeCategory10);

    const margin = { top: 20, right: 20, bottom: 40, left: 60 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select('#bubble-chart')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleBand().domain(groups).range([0, width]).padding(0.1);

    const maxDataValue = d3.max(jsonData, d => d.Value);
    const yScale = d3
        .scaleLinear()
        .domain([0, Math.ceil(maxDataValue / 0.05) * 0.05])
        .nice()
        .range([height, 0]);

    const radiusScale = d3.scaleSqrt().domain([0.01, 0.1]).range([1, 3]);

    const formatValue = d3.format('.5f');


    const verticalLine = svg.append('line')
        .attr('class', 'vertical-line')
        .style('stroke', 'black')
        .style('stroke-dasharray', '4')
        .style('opacity', 0);

    const horizontalLine = svg.append('line')
        .attr('class', 'horizontal-line')
        .style('stroke', 'black')
        .style('stroke-dasharray', '4')
        .style('opacity', 0);

    svg.selectAll('circle')
        .data(jsonData)
        .enter()
        .append('circle')
        .attr('cx', d => xScale(d.Group) + xScale.bandwidth() / 2 + (Math.random() - 0.5) * 40)
        .attr('cy', d => yScale(d.Value) + (Math.random() - 0.5) * 40)
        .attr('r', d => radiusScale(d.Value))
        .attr('fill', d => colorScale(d.Group))
        .attr('opacity', 0.7) // Adjust opacity if needed
        .on('mouseover', function (d, i) {
            // Your tooltip logic here
            const group = d.Group;
            const circle = d3.select(this);
            const circleX = parseFloat(circle.attr('cx'));
            const circleY = parseFloat(circle.attr('cy'));
            const value = formatValue(d.Value);
            verticalLine.style('opacity', 1);
            horizontalLine.style('opacity', 1);

            verticalLine
                .attr('x1', circleX)
                .attr('x2', circleX)
                .attr('y1', circleY)
                .attr('y2', height);

            horizontalLine
                .attr('x1', circleX)
                .attr('x2', 0)
                .attr('y1', circleY)
                .attr('y2', circleY);


            tooltip
                .html(`<strong>Group :</strong> ${i.Group}<br /><strong>Value :</strong> ${i.Value}`)
                .style('left', circleX + 70 + 'px')
                .style('top', circleY + 40 + 'px')
                .style('opacity', 1)
                .style('color' ,'white')
                .style('border-radius', '10px')
                .style('font-size', '15px');

            d3.selectAll('circle').style('opacity', 0.1); // Reduce opacity of all circles
            circle.style('opacity', 1); // Keep opacity of the hovered circle full
            circle.style('cursor', 'pointer');
            circle.style('stroke', 'black');
            circle.style('stroke-width', '1px');
        })
        .on('mouseout', function () {
            // Your tooltip hide logic here
            tooltip.style('opacity', 0);
            verticalLine.style('opacity', 0);
            horizontalLine.style('opacity', 0);
            d3.selectAll('circle').style('opacity', 0.6); // Restore opacity of all circles
            d3.select(this).style('stroke', 'none'); // Remove the border when not hovered

        });

    const xAxis = d3.axisBottom(xScale);
    const xAxisGroup = svg
        .append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0, ${height})`)
        .call(xAxis);


    // Add the group color legend
    xAxisGroup.selectAll('.tick')
        .each(function (d) {
            const groupColor = colorScale(d);
            const groupData = jsonData.filter(item => item.Group === d);

            const rectWidth = groupData.length * 10 + 5; // Adjust the multiplier as needed
            const rectHeight = 10;

            d3.select(this)
                .append('rect')
                .attr('x', - rectWidth / 2)
                .attr('y', -10)
                .attr('width', rectWidth)
                .attr('height', rectHeight)
                .attr('fill', groupColor);
        });

    const yAxis = d3.axisLeft(yScale).ticks(10).tickFormat(d3.format(".2f")); // Use .2f format
    svg.append('g').attr('class', 'y-axis').call(yAxis);
});