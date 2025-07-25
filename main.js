const { Plugin, normalizePath, TFile } = require("obsidian");

module.exports = class ReplaceEmbedOnPaste extends Plugin {
    async onload() {
        console.log("✅ ReplaceEmbedOnPaste loaded");

        this.registerEvent(
            this.app.workspace.on("editor-paste", async (evt, editor) => {
                const activeFile = this.app.workspace.getActiveFile();
                if (!activeFile) return;

                const vault = this.app.vault;
                const folder = activeFile.parent.path;

                const files = vault.getFiles()
                    .filter(f => f.parent.path === folder && /^screen\d+\.png$/.test(f.name))
                    .map(f => parseInt(f.basename.replace("screen", ""), 10))
                    .filter(n => !isNaN(n));

                const nextNum = files.length > 0 ? Math.max(...files) + 1 : 1;
                const filename = `screen${nextNum}.png`;
                const filepath = normalizePath(`${folder}/${filename}`);

                const clipboardItems = evt.clipboardData?.items || [];
                const imageItem = Array.from(clipboardItems).find(i => i.type.startsWith("image/"));
                if (!imageItem) return;

                evt.preventDefault();

                const blob = imageItem.getAsFile();
                const arrayBuffer = await blob.arrayBuffer();

                await vault.createBinary(filepath, arrayBuffer);

                editor.replaceSelection(`![](${filename})`);
            })
        );
    }

    onunload() {
        console.log("❌ ReplaceEmbedOnPaste unloaded");
    }
};