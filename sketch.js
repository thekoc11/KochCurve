let segments = [];

function addAll(arr, list) {
    for(let s of arr){
        list.push(s)
    }
}

function setup() {
    createCanvas(1000, 1000);
    let A = createVector(100, 150);
    let B = createVector(900, 150);
    let s1 = new Segment(A, B);

    let len = p5.Vector.dist(A, B);
    let h = len * sqrt(3)/2;
    let C = createVector(500, 150 + h);
    let s2 = new Segment(B, C);
    let s3 = new Segment(C, A);
    segments.push(s1);
    segments.push(s2);
    segments.push(s3);

  }
  
  function mousePressed(){
      let nextGen = [];

      for(let s of segments){
          let children = s.generate();
          addAll(children, nextGen);
      }

      segments = nextGen;
  }

  function draw() {
    background(0);
    translate(0, 100);

    stroke(255);
    for(let s of segments){
        s.show();
    }
  }