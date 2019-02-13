const electron = require('electron');
const {app,dialog,BrowserWindow,Menu,shell} = electron;

let win;
app.on('ready', function() {
  // Create the browser window.
  win = new BrowserWindow({
           width: 800,
           height: 600
     });
     win.loadURL(`file:///E:/Project/Electron/hello/HTML/index.html`);
});

var app_menu=[
  {
    label:'پرونده',
    submenu:[
      {
        label:'باز کردن',
        accelerator:'CmdOrCtrl+O',
        click:()=>{
        }
      },
      {
        label:'ذخیره',
        accelerator:'CmdOrCtrl+S',
        click:()=>{
        }
      }
    ]
  },
  {
    label:'سیستم',
    submenu:[
        {
        label:'درباره ما',
        click:()=>
        {
                   shell.openExternal('https://www.dotnettips.info');
        }
      },
      {
        label:'خروج',
        accelerator:'CmdOrCtrl+X',
        click:()=>
        {
          win=null;
          app.quit();
        }
      }
    ]
  }
];


var menu=Menu.buildFromTemplate(app_menu);
  Menu.setApplicationMenu(menu);