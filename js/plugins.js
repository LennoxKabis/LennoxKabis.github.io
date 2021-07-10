// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"CGMZ_Core","status":true,"description":"Core CGMZ Plugin, should be placed above all other CGMZ Plugins.","parameters":{"Check for Updates":"true","Dev Tools on Start":"false","Show FPS Counter":"false","Fullscreen":"false","Simulate Production Env":"false"}},
{"name":"DK_Full_Input","status":true,"description":"v.5.0.0 All keys of the keyboard and gamepad","parameters":{"Keyboard":"{\"8\":\"backspace\",\"9\":\"tab\",\"13\":\"ok\",\"16\":\"shift\",\"17\":\"control\",\"18\":\"alt\",\"19\":\"pause\",\"20\":\"capslock\",\"27\":\"escape\",\"32\":\"space\",\"33\":\"pageup\",\"34\":\"pagedown\",\"35\":\"end\",\"36\":\"home\",\"37\":\"left\",\"38\":\"up\",\"39\":\"right\",\"40\":\"down\",\"44\":\"printscreen\",\"45\":\"insert\",\"46\":\"delete\",\"47\":\"/\",\"48\":\"0\",\"49\":\"1\",\"50\":\"2\",\"51\":\"3\",\"52\":\"4\",\"53\":\"5\",\"54\":\"6\",\"55\":\"7\",\"56\":\"8\",\"57\":\"9\",\"65\":\"a\",\"66\":\"b\",\"67\":\"c\",\"68\":\"d\",\"69\":\"e\",\"70\":\"f\",\"71\":\"g\",\"72\":\"h\",\"73\":\"i\",\"74\":\"j\",\"75\":\"k\",\"76\":\"l\",\"77\":\"m\",\"78\":\"n\",\"79\":\"o\",\"80\":\"p\",\"81\":\"q\",\"82\":\"r\",\"83\":\"s\",\"84\":\"t\",\"85\":\"u\",\"86\":\"v\",\"87\":\"w\",\"88\":\"x\",\"89\":\"y\",\"90\":\"z\",\"96\":\"escape\",\"97\":\"numpad1\",\"98\":\"down\",\"99\":\"numpad3\",\"100\":\"left\",\"101\":\"numpad5\",\"102\":\"right\",\"103\":\"numpad7\",\"104\":\"up\",\"105\":\"numpad9\",\"106\":\"*\",\"107\":\"+\",\"109\":\"-\",\"110\":\".\",\"111\":\"/\",\"112\":\"f1\",\"113\":\"f2\",\"114\":\"f3\",\"115\":\"f4\",\"116\":\"f5\",\"117\":\"f6\",\"118\":\"f7\",\"119\":\"f8\",\"120\":\"debug\",\"121\":\"f10\",\"122\":\"f11\",\"123\":\"f12\",\"144\":\"numlock\",\"145\":\"scrolllock\",\"186\":\";\",\"187\":\"=\",\"188\":\"<\",\"189\":\"-\",\"190\":\">\",\"191\":\"?\",\"192\":\"`\",\"219\":\"[\",\"220\":\"|\",\"221\":\"]\",\"222\":\"\\\"\"}","Gamepad":"{\"0\":\"ok\",\"1\":\"cancel\",\"2\":\"shift\",\"3\":\"menu\",\"4\":\"lb\",\"5\":\"rb\",\"6\":\"lt\",\"7\":\"rt\",\"8\":\"select\",\"9\":\"start\",\"10\":\"l3\",\"11\":\"r3\",\"12\":\"up\",\"13\":\"down\",\"14\":\"left\",\"15\":\"right\",\"16\":\"up\",\"17\":\"down\",\"18\":\"left\",\"19\":\"right\",\"20\":\"r_up\",\"21\":\"r_down\",\"22\":\"r_left\",\"23\":\"r_right\"}","Threshold":"0.50","Key Repeat Wait":"24","Key Repeat Interval":"6","Switches":"[]"}},
{"name":"AltMenuScreen","status":true,"description":"Alternative menu screen layout.","parameters":{}},
{"name":"wasdKeyMZ","status":false,"description":"","parameters":{}},
{"name":"AdjustPictureGraphical","status":true,"description":"Plugin that adjust picture to graphical","parameters":{"GridSize":"48","TestMapId":"-1"}},
{"name":"HIME_LargeChoices","status":true,"description":"v1.2 - Combines multiple show choice commands into a single,\r\nlarge list.","parameters":{}},
{"name":"CGMZ_Achievements","status":true,"description":"Creates a powerful achievement system","parameters":{"CGMZ Achievements":"","Achievements":"[]","Requires CGMZ Toast Plugin":"","ShowAchievementPop":"false","AchievementEarnedText":"Achievement Earned","AchievementEarnedColor":"3","AchievementEarnedAlignment":"center","AchievementEarnedSound":"Applause1","Achievement Scene Options":"","ShowSecretAchievements":"false","SecretText":"??????","ShowCriteriaAfterCompletion":"true","DateFormat":"0","ScrollSpeed":"1","ScrollWait":"300","Scroll Deceleration":"0.92","Auto Scroll":"true","Text Options":"","Reward Text":"Rewards:","Requirement Text":"Requirements:","Difficulty Text":"Difficulty:","Description Text":"Description:","Points Text":"Points:","Unearned Text":"Keep playing to earn this achievement","Earned Text":"Achievement earned on:","Earned Count Text":"Earned:","Total Window Alignment":"left","List Window Alignment":"left","Currency Unit Space":"false","Label Color":"16","Gauge Colors":"","CurrencyGaugeColor1":"6","CurrencyGaugeColor2":"17","GenericGaugeColor1":"28","GenericGaugeColor2":"29","ItemGaugeColor1":"22","ItemGaugeColor2":"23","SwitchVarGaugeColor1":"20","SwitchVarGaugeColor2":"21"}},
{"name":"CGMZ_ExitToDesktop","status":true,"description":"Adds options to close the game window (exit to desktop)","parameters":{"Command Name":"Exit Game","Hide in Browser":"true"}},
{"name":"CGMZ_GameInfo","status":true,"description":"Adds text fields to the title screen for copyright/website/etc.","parameters":{"Text Options":"","Font Size":"30","Font Outline Width":"2","Font Outline Color":"black","Left Text":"","Center Text":"","Right Text":"By Lennox Kabis","Buttons":"[\"{\\\"Image\\\":\\\"Actor1_1\\\",\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"width\\\":\\\"50\\\",\\\"height\\\":\\\"50\\\",\\\"URL\\\":\\\"https://lennoxkabis-web.000webhostapp.com/games/aigtstw.html\\\"}\"]"}},
{"name":"CGMZ_PluginCommands","status":true,"description":"Adds plugin commands meant to complement event commands","parameters":{}},
{"name":"CGMZ_SaveFile","status":true,"description":"Changes the default save / load screens","parameters":{"Autosave Options":"","Show Autosave in Save Mode":"true","File Options":"","Max Save Files":"30","File Icon Unused":"229","File Icon Used":"230","Image Options":"","Show Image":"true","Default Image":"","Image Height":"160","Location Fade Opacity":"120","Custom Options":"","Custom Save Variables":"[]","Display Options":"","Show Faces":"true","Header Color":"16","Text Options":"","Empty Text":"No save data exists.","Location Text":"Location:","Playtime Text":"Playtime:","Gold Text":"Jul:","Level Text":"Lv."}},
{"name":"CGMZ_TitleSystem","status":true,"description":"Shows a queue of images/maps on the title screen","parameters":{"Maps":"[\"{\\\"Image1\\\":\\\"Gold\\\",\\\"Image2\\\":\\\"EgyptianMural_mvt\\\",\\\"Map\\\":\\\"0\\\",\\\"DisplayTime\\\":\\\"400\\\"}\",\"{\\\"Image1\\\":\\\"Sky\\\",\\\"Image2\\\":\\\"CherryBlossoms_mvt\\\",\\\"Map\\\":\\\"0\\\",\\\"DisplayTime\\\":\\\"400\\\"}\"]","Fade Speed":"30"}},
{"name":"CommandInput","status":true,"description":"v2.0.2 Command Input Enables a Window Input system for MZ","parameters":{}},
{"name":"Cae_KeyboardInputs","status":false,"description":"v1.0 - Bind common events to keys and define new key inputs.","parameters":{"New Inputs":"[\"{\\\"Code\\\":\\\"65\\\",\\\"Name\\\":\\\"a\\\"}\",\"{\\\"Code\\\":\\\"66\\\",\\\"Name\\\":\\\"b\\\"}\",\"{\\\"Code\\\":\\\"67\\\",\\\"Name\\\":\\\"c\\\"}\",\"{\\\"Code\\\":\\\"68\\\",\\\"Name\\\":\\\"d\\\"}\",\"{\\\"Code\\\":\\\"69\\\",\\\"Name\\\":\\\"e\\\"}\",\"{\\\"Code\\\":\\\"70\\\",\\\"Name\\\":\\\"f\\\"}\",\"{\\\"Code\\\":\\\"71\\\",\\\"Name\\\":\\\"g\\\"}\",\"{\\\"Code\\\":\\\"72\\\",\\\"Name\\\":\\\"h\\\"}\",\"{\\\"Code\\\":\\\"73\\\",\\\"Name\\\":\\\"i\\\"}\",\"{\\\"Code\\\":\\\"74\\\",\\\"Name\\\":\\\"j\\\"}\",\"{\\\"Code\\\":\\\"75\\\",\\\"Name\\\":\\\"k\\\"}\",\"{\\\"Code\\\":\\\"76\\\",\\\"Name\\\":\\\"l\\\"}\",\"{\\\"Code\\\":\\\"77\\\",\\\"Name\\\":\\\"m\\\"}\",\"{\\\"Code\\\":\\\"78\\\",\\\"Name\\\":\\\"n\\\"}\",\"{\\\"Code\\\":\\\"79\\\",\\\"Name\\\":\\\"o\\\"}\",\"{\\\"Code\\\":\\\"80\\\",\\\"Name\\\":\\\"p\\\"}\",\"{\\\"Code\\\":\\\"81\\\",\\\"Name\\\":\\\"q\\\"}\",\"{\\\"Code\\\":\\\"82\\\",\\\"Name\\\":\\\"r\\\"}\",\"{\\\"Code\\\":\\\"83\\\",\\\"Name\\\":\\\"s\\\"}\",\"{\\\"Code\\\":\\\"84\\\",\\\"Name\\\":\\\"t\\\"}\",\"{\\\"Code\\\":\\\"85\\\",\\\"Name\\\":\\\"u\\\"}\",\"{\\\"Code\\\":\\\"86\\\",\\\"Name\\\":\\\"v\\\"}\",\"{\\\"Code\\\":\\\"87\\\",\\\"Name\\\":\\\"w\\\"}\",\"{\\\"Code\\\":\\\"88\\\",\\\"Name\\\":\\\"x\\\"}\",\"{\\\"Code\\\":\\\"89\\\",\\\"Name\\\":\\\"y\\\"}\",\"{\\\"Code\\\":\\\"90\\\",\\\"Name\\\":\\\"z\\\"}\"]","Event Binds":"[]","Key Repeat Wait":"24","Key Repeat Interval":"6","--- Advanced ---":"","Enable Debug":"false","Preserve Original Keys":"true"}},
{"name":"Cae_MenuDisplayOpts","status":true,"description":"v1.3 - Various menu-related display and control options.","parameters":{"--- Menu Cursor ---":"","Text-Width Cursor":"false","No Menu Cursor Blink":"false","No Cursor Wrap Up/Down":"false","No Cursor Wrap Left/Right":"false","Scroll Can Change Column":"false","--- Game Windows ---":"","Instant Open":"false","Instant Close":"false","Choice Text Alignment":"left","Align Choice to Message":"false","Only Choice Y Alignment":"Default","--- Messages ---":"","Random Msg Splitter":"|","Empty Help Text":"{\"Generic\":\"Navigate using the arrow keys.\\nPress \\\\c[4]Z\\\\c[0] or \\\\c[4]Enter\\\\c[0] to select, \\\\c[4]X\\\\c[0] or \\\\c[4]Esc\\\\c[0] to go back.\",\"ItemCategory\":\"Select an item category!\\nPress \\\\c[4]X\\\\c[0] or \\\\c[4]Esc\\\\c[0] to go back.\",\"ItemList\":\"No items to see here.\\nPress \\\\c[4]X\\\\c[0] or \\\\c[4]Esc\\\\c[0] to go back.\",\"SkillType\":\"Select a skill type!\\nPress \\\\c[4]X\\\\c[0] or \\\\c[4]Esc\\\\c[0] to go back.\",\"SkillList\":\"No skills to see here.\\nPress \\\\c[4]X\\\\c[0] or \\\\c[4]Esc\\\\c[0] to go back.\",\"EquipCommand\":\"\",\"EquipSlot\":\"This equip slot is empty.\\nPress \\\\c[4]Z\\\\c[0] or \\\\c[4]Enter\\\\c[0] to choose an item to equip!\",\"EquipItem\":\"You have nothing to equip in this slot.\\nPress \\\\c[4]X\\\\c[0] or \\\\c[4]Esc\\\\c[0] to go back.\",\"ShopCommand\":\"\",\"ShopBuy\":\"There's nothing here to purchase.\\nPress \\\\c[4]X\\\\c[0] or \\\\c[4]Esc\\\\c[0] to go back.\",\"ShopSell\":\"You have no items of this type to sell.\\nPress \\\\c[4]X\\\\c[0] or \\\\c[4]Esc\\\\c[0] to go back.\"}","Show Text \\v[x][y]":"false","Currency Text Codes":"false","--- ColorManager ---":"","Outline Colour":"{\"R\":\"0\",\"G\":\"0\",\"B\":\"0\",\"A\":\"0.6\"}","Dim Colour 1":"{\"R\":\"0\",\"G\":\"0\",\"B\":\"0\",\"A\":\"0.6\"}","Dim Colour 2":"{\"R\":\"0\",\"G\":\"0\",\"B\":\"0\",\"A\":\"0\"}","Item Back Colour 1":"{\"R\":\"32\",\"G\":\"32\",\"B\":\"32\",\"A\":\"0.5\"}","Item Back Colour 2":"{\"R\":\"0\",\"G\":\"0\",\"B\":\"0\",\"A\":\"0.5\"}","--- Other ---":"","Hidden Item A Name":"","Hidden Item B Name":"","Volume Divisions":"5","Pause Menu Swap":"No Swap","Disabled Pause Menu":"None","Hide Gauges":"[]","Hide Options":"[]","--- Advanced ---":"","Hidden Item A Symbol":"hiddenItemA","Hidden Item B Symbol":"hiddenItemB"}},
{"name":"Cae_TitleMenu","status":true,"description":"v1.1 - Customise title screen commands and layout.","parameters":{"New Game Commands":"[]","Max No-Scroll Commands":"0","Block Style":"false","JS: Block Width":"Graphics.boxWidth * 0.8","--- Advanced ---":"","New Game Symbol":"altStart%1"}}
];