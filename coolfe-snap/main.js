
$(function() {
    const s = Snap("#playground");

    // Paper.line(x1, y1, x2, y2);
    // Draws a line
    const hLine = s.line(70, 35, 830, 35);
    hLine.attr({
        stroke: "#c6d9ed",
        strokeWidth: 8
    });

    const navItem = {
        top: 40,
        left: 130,
        height: 120,
        title: "text"
    };

    const dashLine = s.line(navItem.left, navItem.top, navItem.left, navItem.top + navItem.height);
    dashLine.attr({
        stroke: '#d4d4d4',
        strokeWidth: 1,
        "stroke-dasharray": 3
    });

    // Paper.rect(x, y, width, height, [rx], [ry]);
    // Draws a rectangle 
    var tagShape = s.rect(navItem.left - 30, navItem.top + navItem.height, 60, 30);
    tagShape.attr({
        fill: "#4183c4"
    });

    // Paper.text(x, y, text); 
    // Draws a text string
    const tagDesc = s.text(navItem.left, navItem.top + navItem.height + 20, navItem.title);
    tagDesc.attr({
        fill: "#fff",
        textAnchor: "middle"
    })

    // Paper.g([varargs]);
    // Creates a group element
    const tag = s.group(tagShape, tagDesc);
    tag.click(function() {
        // Snap.animate(from, to, setter, duration, [easing], [callback]); 
        // Runs generic animation of one number into another with a caring function
        tagShape.animate({ y: 260 }, 800, mina.elastic);
        tagDesc.animate({ y: 280 }, 800, mina.elastic);
        dashLine.animate({ y2: 260 }, 100, mina.elastic, function() {
            this.attr({
                stroke: "#932d70",
                "stroke-dasharray": "none"
            })
        });
    })


})