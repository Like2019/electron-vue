import { app, BrowserWindow } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 650,
    useContentSize: true,
    width: 1020,
    frame:false,    //是否显示窗口边框
    resizable:false,   //是否缩放
    movable:true,  //是否移动
    webPreferences:{
      nodeIntegration:true
    }
  })

  mainWindow.loadURL(winURL)
  mainWindow.setMenu(null)
  mainWindow.webContents.closeDevTools()    //取消默认出现得控制台
  // 自定义导航栏关闭事件
  const electron = require('electron');
  const ipc = electron.ipcMain;
  ipc.on('close-app', () => {
      // 通知关闭
      mainWindow.close();
  });
  ipc.on('max-app', () => {
    if (mainWindow.isMaximized()) {
        // 若已经是最大化了，则还原
        mainWindow.unmaximize()
    } else {
        // 最大化窗口
        mainWindow.maximize()
    }
});
// 还原最大化窗口
ipc.on('restore',() => {
  mainWindow.unmaximize()
})
 // 最小化
ipc.on('min-app', () => {
    mainWindow.minimize();
});


  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
