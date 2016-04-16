var drawShape = function(x, y, width, height) {
    // fill the mutative color of the shape every recursive
    // not built in function, see "https://www.khanacademy.org/computing/
    //computer-science/algorithms/recursive-algorithms/p/project-recursive-art"
    fill(width*2, height*0.6, width*0.3); 
    
    // draw Ovals shape
    // not built in function, see "https://www.khanacademy.org/computing/
    //computer-science/algorithms/recursive-algorithms/p/project-recursive-art"
    ellipse(x, y, width, height);
    ellipse(x, y, height, width);
    
    var new_width = width / 1.2;
    var new_height = height / 1.08;
    if (new_width >= 2) {
        drawShape(x, y, new_width, new_height);
    }
};

drawShape(width/2, height/2, 380, 380);
