function Colorbar() {
    var that = {};
    var scale, //the input scale this represents
	fillLegendScale, //a linear scale that maps the scale onto a bar to be shown here.
	fillLegend,//a d3 selection that contains all the elements used here;
	parentSVG = d3.select("svg"),// What svg contains this; currently hard coded.
        origin = [125,65],//where on the parent to put it
        barHeight = d3.min([window.innerHeight - 3*origin[1],window.innerHeight*.75]),//how tall the scale should be
        barWidth = 20,//how wide the scale should be.
        title = "",//Dropped on top of the thing.
	scaleType = "linear"; //what--if any--title to put at the top of it.

    var drag = d3.behavior.drag()
        .on("drag", function(d,i) {
            d.x += d3.event.dx
            d.y += d3.event.dy
            d3.select(this).attr("transform", function(d,i){
                return "translate(" + d.x + ',' + d.y  + ")"
            })
        });
    
    fillLegend = parentSVG
        .selectAll("g.color.legend")
        .data([{
            "x":origin[0],"y":origin[1]}]);

        fillLegend.enter()
            .append('g')
            .attr('id','fill-legend')
            .classed("legend",true)
            .classed("color",true)
            .attr("transform", function(d,i){
                d.x = origin[0]
                console.log("appending a fill legend")
                return "translate(" + d.x + ',' + d.y  + ")"
            })
            .call(drag)


    var checkScaleType = function() {
	// AFAIK, d3 scale types aren't easily accessible from the scale itself.
	// But we need to know the scale type for formatting axes properly
	cop = scale.copy();
	cop.range([0, 1])
	cop.domain([1, 10])
	if (Math.abs((cop(10) - cop(1)) / Math.log(10/1) - (cop(10) - cop(2)) / Math.log(10/2)) < 1e-6) {return "log"}
	else if (Math.abs((cop(10) - cop(1)) / 9 - (cop(10) - cop(2)) / 8) < 1e-6) {return "linear"}
	else if (Math.abs((cop(10) - cop(1)) / (Math.sqrt(10) - 1) - (cop(10) - cop(2)) / (Math.sqrt(10) - Math.sqrt(2))) < 1e-6) {return "sqrt"}


    }

    var update = function() {

	var transitionDuration = 1000
        //This either creates, or updates, a fill legend, and drops it on the screen.
        //A fill legend includes a pointer that can be updated in response to mouseovers, because that's way cool.

        // define some defaults
        //Create a fill legend entry, if it doesn't exist

        fillLegendScale = scale.copy()

        legendRange = d3.range(0,barHeight,by=barHeight/(fillLegendScale.domain().length-1))
        legendRange.push(barHeight)

        fillLegendScale.range(legendRange.reverse())

	//create if doesn't exist.
        fillRects = fillLegend.selectAll("#fillLegendRects").data([1])
        fillRects.enter().append("g").attr("id","fillLegendRects")

        colorScaleRects = fillRects.selectAll('rect').data(d3.range(0,barHeight))

	//create if don't exist;this isn't quite right, because it simply dumps new elements at the bottom
	//rather than stretching the scale out.
        
	colorScaleRects
	    .enter()
            .append("rect")
            .classed("rect",true)
            .classed("legend",true)
	    .style("opacity",0)
	    .style("stroke-width",0)
	    .attr({
                width: barWidth,
                height : 2, //single pixel widths produce ghosting, so 
		//I just let them overlap;
                y: function(d) {
		    return d
		},
                stroke: function(d) {
		    //the color should be 
                    return scale(fillLegendScale.invert(d));
                }
	    })
	    .style(  { fill: function(d) {
		//the color should be 
                return scale(fillLegendScale.invert(d));
            }})

	//update attributes of all of them.
        colorScaleRects
	    .transition()
	    .duration(transitionDuration)
            .attr({
                width: barWidth,
                height : 2,
                y: function(d) {
		    return d
		},
                fill: function(d) {
		    //the color should be 
                    return scale(fillLegendScale.invert(d));
                }
            })
	    .style("opacity",1)
	    .style(  {              fill: function(d) {
		//the color should be 
                return scale(fillLegendScale.invert(d));
            }});

	//If the scale has changed size, some rects are extraneous
        colorScaleRects
	    .exit()
	    .remove() 

        //'formatter' pretties the name, and drops certain ticks for
        // a log scale. It's overwritten if it's _not_ a log scale.

        function formatter(d) {
            if (scaleType=="log") {
                var x = Math.log(d) / Math.log(10) + 1e-6;
                return Math.abs(x - Math.floor(x)) < .7 ? prettyName(d) : "";
            }
            return prettyName(d)
        }


	//Now to make an axis
	//create if doesn't exist.
        colorAxis = fillLegend.selectAll(".color.axis").data([1])
        colorAxis.enter()
            .append("g")
            .attr("id","color-axis")
            .classed("axis",true)
            .classed("color",true)
            .attr("transform","translate (" + (barWidth) + ",0)")


        colorAxisFunction = d3.svg.axis()
            .scale(fillLegendScale)
            .orient("right")
            .tickFormat(formatter)

        //Add bit to change the legend type

        d3.select("#fillLegendScale").remove()

        fillLegend
            .append("text")
            .attr("id","fillLegendScale")
            .text("")
            .attr("transform","translate(0," + (barHeight + 25) + ")")

	//transition the axis
        colorAxis
            .transition()
            .duration(transitionDuration)
            .call(colorAxisFunction)

        //make a title

        titles = fillLegend.selectAll(".axis.title").data([{"label":title}])

        titles.enter().append("text")

        titles
            .attr("id","#colorSelector")
            .attr('transform','translate (0,-10)')
            .classed("axis",true)
            .classed("title",true)
	.style("text-anchor","middle")
            .text(function(d) {return d.label})

        titles.exit().remove()
	return this;
    }
    
    prettyName =  function(number) {

        var comparisontype = comparisontype || function() {return ""}

        if (comparisontype()!='comparison') {
            suffix = ''
            switch(true) {
            case number>=1000000000:
                number = number/1000000000
                suffix = 'B'
                break;
            case number>=1000000:
                number = number/1000000
                suffix = 'M'
                break;
            case number>=1000:
                number = number/1000
                suffix = 'K'
                break;
            }
            if (number < .1) {
                return(Math.round(number*100)/100+suffix)
            }
            return(Math.round(number*10)/10+suffix)
        }
        if (comparisontype()=='comparison') {
            if (number >= 1) {return(Math.round(number)) + ":1"}
            if (number < 1) {return("1:" + Math.round(1/number))}
        }
    }

    pointTo=function(inputNumbers) {
	var pointer = fillLegend.selectAll(".pointer")
	var pointerWidth = Math.round(barWidth*3/4);


        //Also creates a pointer if it doesn't exist yet.
        pointers = fillLegend
            .selectAll('.pointer')
            .data([inputNumbers])

        pointers
            .enter()
            .append('path')
            .attr('transform',"translate(0," + (
		fillLegendScale(inputNumbers) - pointerWidth)+ ')'
		 )
            .classed("pointer",true)
            .classed("axis",true)
            .attr('d', function(d) {
                var y = 0, x = barWidth-pointerWidth;
                return 'M ' + x +' '+ y + ' l ' + pointerWidth + ' ' + pointerWidth + ' l -' + pointerWidth + ' ' + pointerWidth + ' z';
            })
            .attr("fill","grey")
            .attr("opacity","0")


	//whether it's new or not, it updates it.
        pointers
            .transition()
            .duration(1000)
            .attr('opacity',1)
            .attr('transform',"translate(0," + (fillLegendScale(inputNumbers) -14)+ ')')
	     //and then it fades the pointer out over 5 seconds.
            .transition()
	    .delay(2000)
	    .duration(3000)
            .attr('opacity',0)
            .remove()
    }

    //getter-setters
    that.origin = function(x) {
        if (!arguments.length) return origin;
        origin = x
        return that
    }

    that.barWidth = function(x) {
        if (!arguments.length) return barWidth;
        barWidth= x
        return that
    }

    that.barHeight = function(x) {
        if (!arguments.length) return barHeight;
        barHeight= x
        return that
    }

    that.orientation = function(x) { 
	if (!arguments.length) return orientation; 
	orientation= x;
	return that;
    } 

    that.title = function(x) {
        if (!arguments.length) return title;
        title=x
	fillLegend
	    .selectAll(".axis.title")
	    .text(x)
        return that
    }


    that.scale = function(value) {
        if (!arguments.length) return scale;
        scale=value
	scaleType = checkScaleType()
        return that
    }


    that.update = update
    that.pointTo = pointTo

    return that;
}
