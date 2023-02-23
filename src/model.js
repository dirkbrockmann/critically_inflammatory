
import param from "./parameters.js"
import {shuffle} from "lodash-es"
import {square} from "lattices"


var agents = [];

const initialize = () => {

	// set/reset timer
	param.timer={}; param.tick=0;

	const N = param.N;
	
	const s = square(N).boundary("dirichlet")
	
	agents = s.nodes;
	
	agents.forEach(a=>{
		if (Math.random() < param.initial_trees) {
			a.state = "tree"
		} else {
			a.state = "empty"
		}
	})
	
	
};

const go  = () => {
	
	param.tick++;
	
	const trees = agents.filter(d=>d.state=="tree");
	const fire = agents.filter(d=>d.state=="fire");
	

	shuffle(trees).forEach(function(tree){
		if (Math.random()<param.vegetation_growth_rate.widget.value()){
			const nn = tree.neighbors;
			const l = nn.length;
			const target_site = nn[Math.floor(Math.random()*l)]
			if (target_site.state=="empty") {target_site.state="tree"} 
			
		}
	})
	
	shuffle(fire).forEach(function(tree){
		tree.neighbors.forEach(function(n){
			if (n.state=="tree" && Math.random() < param.ignition_probability.widget.value() && tree.burntime==param.burntime) {
				n.state="fire"
				n.burntime=param.burntime;
			} 
		})
		tree.burntime-=1;
		if(tree.burntime==0){tree.state="empty"}
	})
	
	if(Math.random()<param.lightning_rate.widget.value()){
		const target = agents[Math.floor(Math.random()*agents.length)];
		if (target.state=="tree") {
			target.state="fire"
			target.burntime = param.burntime;
		}
	}
	
		
}

const update = () => {
	
	
}

export {agents,initialize,go,update}
