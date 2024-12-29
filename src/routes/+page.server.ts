// import { FFScene, FFText, FFImage, FFCreator } from 'ffcreator';
import { fail, redirect } from '@sveltejs/kit';
// import { read } from '$app/server';
import { join } from 'path';

type ContributionData = {
	count: number;
	level: number;
}[][];

export const actions = {
	// generateVideo: async ({ request, fetch }) => {
	// 	const data = await request.formData();
	// 	const username = data.get('username')?.toString();
	// 	const year = data.get('year')?.toString();
	// 	// Validate inputs
	// 	if (!username || !year) {
	// 		return fail(400, {
	// 			username,
	// 			year,
	// 			error: 'Username and year are required'
	// 		});
	// 	}
	// 	try {
	// 		// Fetch GitHub contributions data
	// 		const response = await fetch(`https://gh-contributions-api.vercel.app/${username}/${year}`);
	// 		const contributions: ContributionData = await response.json();
	// 		if (!contributions || contributions.length === 0) {
	// 			return fail(404, {
	// 				username,
	// 				year,
	// 				error: 'No contributions found'
	// 			});
	// 		}
	// 		const creator = new FFCreator({
	// 			width: 1920,
	// 			height: 1080,
	// 			outputDir: join(process.cwd(), 'static/videos'), // Ensure the output directory exists
	// 			fps: 24
	// 		});
	// 		const scene = new FFScene();
	// 		scene.setBgColor('#0D1117');
	// 		// Video generation logic
	// 		for (let rowIndex = 0; rowIndex < contributions.length; rowIndex++) {
	// 			for (let dayIndex = 0; dayIndex < contributions[rowIndex].length; dayIndex++) {
	// 				const day = contributions[rowIndex][dayIndex];
	// 				if (day && day.count > 0) {
	// 					// const blockPath = await generateContributionBlock(day.count);
	// 					const block = new FFImage({
	// 						path: 'blockPath',
	// 						x: dayIndex * 20,
	// 						y: rowIndex * 20,
	// 						width: 20,
	// 						height: 20
	// 					});
	// 					scene.addChild(block);
	// 				}
	// 			}
	// 		}
	// 		// const titleText = new FFText({
	// 		// 	text: `${username}'s GitHub Contributions ${year}`,
	// 		// 	x: 1920 / 2,
	// 		// 	y: 50,
	// 		// 	fontSize: 50,
	// 		// 	color: '#FFFFFF'
	// 		// });
	// 		scene.addChild(titleText);
	// 		creator.addChild(scene);
	// 		// Async video generation
	// 		// const videoPath = await new Promise<string>((resolve, reject) => {
	// 		// 	creator.on('complete', (data) => {
	// 		// 		resolve(data.output);
	// 		// 	});
	// 		// 	creator.on('error', (err) => {
	// 		// 		reject(err);
	// 		// 	});
	// 		// 	creator.start();
	// 		// });
	// 		// Redirect to video page or return video path
	// 		throw redirect(303, `/video/${videoPath.split('/').pop()}`);
	// 	} catch (err) {
	// 		console.error('Video generation error:', err);
	// 		return fail(500, {
	// 			username,
	// 			year,
	// 			error: 'Failed to generate video'
	// 		});
	// 	}
	// }
};

// Utility function for block generation
// async function generateContributionBlock(count: number): Promise<string> {
// 	try {
// 		// Example: reading a block template
// 		const blockTemplate = await read('./static/block-template.png');
// 		const blockPath = `static/blocks/block-${count}.png`;

// 		// Implement image manipulation logic here
// 		// You might need additional libraries like sharp or canvas

// 		return blockPath;
// 	} catch (error) {
// 		console.error('Block generation error:', error);
// 		// Fallback to a default block path
// 		return 'static/blocks/default-block.png';
// 	}
// }
