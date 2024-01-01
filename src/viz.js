import * as d3 from "d3"
import param from "./parameters.js"
import {agents} from "./model.js"
import cfg from "./config.js"


var ctx,dL,W,H;

const X = d3.scaleLinear().domain([-0.5,0.5]);
const Y = d3.scaleLinear().domain([-0.5,0.5]);

const C = d3.scaleOrdinal().domain(["empty","tree"])
	.range([cfg.simulation.empty_color,cfg.simulation.tree_color])

const C_fire = d3.scaleLinear().domain([0,param.burntime])
	.range(["black","red"])

function agent_color(a){ return a.state=="fire" ? C_fire(a.burntime) : C(a.state) }

const update = (display,config) => {};

const initialize = (display,config) => {

	W = config.display_size.width;
	H = config.display_size.height;
			
	X.range([0,W]);
	Y.range([0,H]);
	
	ctx = display.node().getContext('2d');	
	ctx.clearRect(0, 0, W, H);
	agents.forEach(d=>{
		const c = d.cell();
		
		const color = agent_color(d);
		
		ctx.fillStyle=color;
		ctx.strokeStyle=color;
		ctx.lineWidth = 0;
		ctx.fillRect(X(c[0].x),X(c[0].y),X(c[2].x)-X(c[0].x),X(c[2].y)-X(c[0].y))
	})

};

const go = (display,config) => {
		
	ctx.clearRect(0, 0, W, H);
	
	agents.forEach(d=>{
		const c = d.cell();
		
		const color = agent_color(d);
		
		ctx.fillStyle=color;
		ctx.strokeStyle=color;
		ctx.lineWidth = 0;
		ctx.fillRect(X(c[0].x),X(c[0].y),X(c[2].x)-X(c[0].x),X(c[2].y)-X(c[0].y))
	})	
}


export {initialize,go,update}
