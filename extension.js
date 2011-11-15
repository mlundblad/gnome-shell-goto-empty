// Sample extension code, makes clicking on the panel show a message
const St = imports.gi.St;
const Mainloop = imports.mainloop;

const Main = imports.ui.main;

function _gotoLastWorkspace() {
    let ws = global.screen.get_workspace_by_index(global.screen.n_workspaces - 1);
    ws.activate(true);
}

// Put your extension initialization code here
function main() {
    // setup shortcut handler...
    Main.wm.setKeybindingHandler('show_desktop', _gotoLastWorkspace);
}
