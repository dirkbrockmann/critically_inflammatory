export default {
		N:100,
		initial_trees:0.01,
		burntime: 10,
		vegetation_growth_rate: {
			range:[0,0.1],
			default:0.05
		},
		lightning_rate: {
			range:[0,1],
			default: 0.25
		},
		ignition_probability:{
			range : [0,1],
			default : 0.5
		}
}

