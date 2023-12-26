# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

.faces {
height: 200px;
width: 200px;
text-align: center;
line-height: 200px;
font-weight: bold;
opacity: 0.7;

    position: absolute;

}

.top {
background-color: red;
transform: rotateY(90deg) translateY(100px);
}

.bottom {
background-color: green;
transform: rotateY(90deg) translateY(-100px);
}

.left {
background-color: blue;
transform: rotateX(90deg) translateX(-100px);
}

.right {
background-color: violet;
transform: rotateX(90deg) translateX(100px);
}

.front {
background-color: yellow;
transform: translateZ(-100px);
}

.back {
background-color: magenta;
transform: translateZ(100px);
}

.cube {
position: relative;
height: 200px;
width: 200px;
transform: rotateX(35deg) rotateY(35deg) rotateZ(15deg);

    perspective: 800px;

}

<div className="cube">
        <div className="faces top">TOP</div>
        <div className="faces bottom">BOTTOM</div>
        <div className="faces left">LEFT</div>
        <div className="faces right">RIGHT</div>
        <div className="faces front">FRONT</div>
        <div className="faces back">BACK</div>
      </div>


