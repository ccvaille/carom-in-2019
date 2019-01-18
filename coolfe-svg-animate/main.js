$(function() {
    const s = Snap("#playground");

    // Paper.circle(x, y, r)
    // Draws a circle
    const circleBox = s.circle(40, 40, 30);
    circleBox.attr({ fill: "#F8E71C", stroke: "#322626" });
    circleBox.animate({ fill: "red" }, 2000);
})