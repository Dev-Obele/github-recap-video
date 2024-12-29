<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { Sheet, SheetContent, SheetTrigger } from '$lib/components/ui/sheet';
	import { Home, Github, Video } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import { enhance } from '$app/forms';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	function navigateToGenerator() {
		goto('/generate');
	}

	let username = '';
	let year = new Date().getFullYear().toString();
</script>

<div class="mb-36 flex min-h-screen flex-col items-center bg-background p-6 text-foreground">
	<div class="max-w-2xl space-y-8 text-center">
		<h1 class="text-4xl font-bold text-primary">GitHub Contributions Video Generator</h1>

		<p class="text-xl text-muted-foreground">
			Transform your GitHub contribution history into a stunning visual story.
		</p>

		<div class="flex justify-center space-x-4">
			<form method="POST" action="?/generateVideo" use:enhance>
				<div class="space-y-4">
					<div>
						<Label for="username">GitHub Username</Label>
						<Input
							type="text"
							name="username"
							bind:value={username}
							placeholder="Enter GitHub username"
							required
						/>
					</div>

					<div>
						<Label for="year">Year</Label>
						<Input
							type="number"
							name="year"
							bind:value={year}
							min="2010"
							max={new Date().getFullYear()}
							required
						/>
					</div>

					<Button type="submit">
						<Video class="mr-2 h-4 w-4" />
						Generate Your Video
					</Button>
				</div>
			</form>
		</div>
		<a
			href="https://github.com/michael-obele/github-recap-video"
			target="_blank"
			class="{buttonVariants({ variant: 'outline' })} flex items-center space-x-2"
		>
			<Github class="mr-2 h-4 w-4" />
			GitHub Repository
		</a>
		<Sheet>
			<SheetTrigger>
				<Button variant="secondary">
					<Home class="mr-2 h-4 w-4" />
					Learn More
				</Button>
			</SheetTrigger>
			<SheetContent>
				<div class="p-4">
					<h2 class="mb-4 text-2xl font-semibold">About the Project</h2>
					<p class="text-muted-foreground">
						Create dynamic videos that showcase your coding journey using GitHub contribution data.
					</p>
				</div>
			</SheetContent>
		</Sheet>
	</div>
</div>
