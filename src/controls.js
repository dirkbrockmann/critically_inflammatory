import * as widgets from "d3-widgets"
import {range,map,toPairs} from "lodash-es"

import cfg from "./config.js"
import parameters from "./parameters.js"

import {toArray,add_id_label,add_widget,get_variables,get_booleans,get_choices} from "./utils.js"


const variables = get_variables(parameters);

add_id_label(variables)

const va = toArray(variables);

const sliders = map(va,
		v => widgets.slider()
					.id(v.id)
					.label(v.label)
					.range(v.range)
					.value(v.default)
					.size(cfg.widgets.slider_size)
			//		.fontsize(cfg.widgets.fontsize)
					.girth(cfg.widgets.slider_girth)
					.knob(cfg.widgets.slider_knob)
	
		);

add_widget(va,sliders);

const go = widgets.button().actions(["play","pause"])
const setup = widgets.button().actions(["back"])
const reset = widgets.button().actions(["rewind"])
		
const buttons = [go,setup,reset];


export default (controls,grid)=>{

	const sl_pos=grid.position(cfg.widgets.slider_anchor.x,range(sliders.length)
			.map(x=>(cfg.widgets.slider_anchor.y+cfg.widgets.slider_gap*x)));
	
	
	sliders.forEach((sl,i) => sl.position(sl_pos[i]));
		
	go.position(grid.position(cfg.widgets.playbutton_anchor.x,cfg.widgets.playbutton_anchor.y))
		.size(cfg.widgets.playbutton_size);
	
	reset.position(grid.position(cfg.widgets.backbutton_anchor.x,cfg.widgets.backbutton_anchor.y)).size(cfg.widgets.button_size);;
	
	setup.position(grid.position(cfg.widgets.resetbutton_anchor.x,cfg.widgets.resetbutton_anchor.y)).size(cfg.widgets.button_size);
	

	controls.selectAll(".slider").data(sliders).enter().append(widgets.widget);
	controls.selectAll(".button").data(buttons).enter().append(widgets.widget);

}

export {sliders,go,setup,reset,variables}


