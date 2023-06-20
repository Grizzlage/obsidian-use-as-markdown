import { Plugin } from 'obsidian';

export default class TxtAsMdPlugin extends Plugin {

	async onload() {
		super.onload();
		this.registerExtensions(["txt", "json", "sh", "sql", "csv"], "markdown");
	}
}