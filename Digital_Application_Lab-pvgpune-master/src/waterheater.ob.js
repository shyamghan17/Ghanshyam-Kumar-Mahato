var _$_4d5e=["mycanvas","getElementById","setStage","PI","motor.mp3","ended","currentTime","play","addEventListener","pause","draw","outlink","outlink1","2d","getContext","font","12pt Calibri","fillStyle","blue","Door","fillText","Level","Temp","D","L","T","Water Valve","Heater","Motor","ip","strokeStyle","green","grey","xin1","beginPath","moveTo","lineTo","yin1","lineWidth","stroke","width","height","clearRect","btn1","value","off","on","backgroundColor","style","setip1","btn2","btn3","start","stop","cos","sin","arc","yellow","fill"];mycanvas=document[_$_4d5e[1]](_$_4d5e[0]);var div1= new divgate(_$_4d5e[0],200,85);var a1= new andgate(_$_4d5e[0],400,85);var n1= new notgate(_$_4d5e[0],300,160);var div2= new divgate(_$_4d5e[0],150,180);var a2= new andgate(_$_4d5e[0],475,200);var a3= new andgate(_$_4d5e[0],650,225);var a4= new andgate(_$_4d5e[0],600,275);var div3= new divgate(_$_4d5e[0],550,200);var div4= new divgate(_$_4d5e[0],150,300);var n2= new notgate(_$_4d5e[0],250,235);var b1= new bulb(_$_4d5e[0],725,85);var b2= new bulb(_$_4d5e[0],725,225);var b3= new bulb(_$_4d5e[0],725,275);var anim1= new Animation(_$_4d5e[0]);anim1[_$_4d5e[2]](stage);ang=0;ang1=Math[_$_4d5e[3]]/100;myAudio= new Audio(_$_4d5e[4]);myAudio[_$_4d5e[8]](_$_4d5e[5],function(){this[_$_4d5e[6]]=0;this[_$_4d5e[7]]();},false);function stop(){try{myAudio[_$_4d5e[9]]();myAudio[_$_4d5e[6]]=0;}catch(err){}}function play(){try{myAudio[_$_4d5e[7]]()}catch(err){}}function cockpit(){div1[_$_4d5e[10]]();div2[_$_4d5e[10]]();a1[_$_4d5e[10]]();a2[_$_4d5e[10]]();a3[_$_4d5e[10]]();n1[_$_4d5e[10]]();div3[_$_4d5e[10]]();a4[_$_4d5e[10]]();div4[_$_4d5e[10]]();n2[_$_4d5e[10]]();b1[_$_4d5e[10]]();b2[_$_4d5e[10]]();b3[_$_4d5e[10]]();div1[_$_4d5e[11]](a1,1,1);div2[_$_4d5e[11]](n1,1,1);div1[_$_4d5e[12]](a2,1,1);div2[_$_4d5e[12]](a2,2,1);n1[_$_4d5e[11]](a1,2,1);a2[_$_4d5e[11]](div3,1,1);div3[_$_4d5e[11]](a3,1,1);div3[_$_4d5e[12]](a4,1,1);div4[_$_4d5e[12]](a4,2,1);div4[_$_4d5e[11]](n2,1,1);n2[_$_4d5e[11]](a3,2,1);a1[_$_4d5e[11]](b1,1,1);a3[_$_4d5e[11]](b2,1,1);a4[_$_4d5e[11]](b3,1,1);var a=document[_$_4d5e[1]](_$_4d5e[0]);var b=a[_$_4d5e[14]](_$_4d5e[13]);b[_$_4d5e[15]]=_$_4d5e[16];b[_$_4d5e[17]]=_$_4d5e[18];b[_$_4d5e[20]](_$_4d5e[19],75,60);b[_$_4d5e[20]](_$_4d5e[21],75,135);b[_$_4d5e[20]](_$_4d5e[22],75,210);b[_$_4d5e[20]](_$_4d5e[23],50,95);b[_$_4d5e[20]](_$_4d5e[24],50,170);b[_$_4d5e[20]](_$_4d5e[25],50,245);b[_$_4d5e[20]](_$_4d5e[26],750,85);b[_$_4d5e[20]](_$_4d5e[27],750,225);b[_$_4d5e[20]](_$_4d5e[28],750,275);if(div1[_$_4d5e[29]]==1){b[_$_4d5e[30]]=_$_4d5e[31]}else {b[_$_4d5e[30]]=_$_4d5e[32]};var c=(100+div1[_$_4d5e[33]])/2;b[_$_4d5e[34]]();b[_$_4d5e[35]](100,85);b[_$_4d5e[36]](c,85);b[_$_4d5e[36]](c,div1[_$_4d5e[37]]);b[_$_4d5e[36]](div1[_$_4d5e[33]],div1[_$_4d5e[37]]);b[_$_4d5e[38]]=3;b[_$_4d5e[39]]();if(div2[_$_4d5e[29]]==1){b[_$_4d5e[30]]=_$_4d5e[31]}else {b[_$_4d5e[30]]=_$_4d5e[32]};var c=(100+div2[_$_4d5e[33]])/2;b[_$_4d5e[34]]();b[_$_4d5e[35]](100,160);b[_$_4d5e[36]](c,160);b[_$_4d5e[36]](c,div2[_$_4d5e[37]]);b[_$_4d5e[36]](div2[_$_4d5e[33]],div2[_$_4d5e[37]]);b[_$_4d5e[38]]=3;b[_$_4d5e[39]]();if(div4[_$_4d5e[29]]==1){b[_$_4d5e[30]]=_$_4d5e[31]}else {b[_$_4d5e[30]]=_$_4d5e[32]};var c=(100+div4[_$_4d5e[33]])/2;b[_$_4d5e[34]]();b[_$_4d5e[35]](100,235);b[_$_4d5e[36]](c,235);b[_$_4d5e[36]](c,div4[_$_4d5e[37]]);b[_$_4d5e[36]](div4[_$_4d5e[33]],div4[_$_4d5e[37]]);b[_$_4d5e[38]]=3;b[_$_4d5e[39]]();}function meclick(d){var a=document[_$_4d5e[1]](_$_4d5e[0]);var b=a[_$_4d5e[14]](_$_4d5e[13]);b[_$_4d5e[42]](0,0,a[_$_4d5e[40]],a[_$_4d5e[41]]);var e;if(d==1){e=document[_$_4d5e[1]](_$_4d5e[43]);if(e[_$_4d5e[44]]==_$_4d5e[45]){e[_$_4d5e[44]]=_$_4d5e[46];e[_$_4d5e[48]][_$_4d5e[47]]=_$_4d5e[31];div1[_$_4d5e[49]](1);}else {e[_$_4d5e[44]]=_$_4d5e[45];e[_$_4d5e[48]][_$_4d5e[47]]=_$_4d5e[32];div1[_$_4d5e[49]](0);};}else {if(d==2){e=document[_$_4d5e[1]](_$_4d5e[50]);if(e[_$_4d5e[44]]==_$_4d5e[45]){e[_$_4d5e[44]]=_$_4d5e[46];e[_$_4d5e[48]][_$_4d5e[47]]=_$_4d5e[31];div2[_$_4d5e[49]](1);}else {e[_$_4d5e[44]]=_$_4d5e[45];e[_$_4d5e[48]][_$_4d5e[47]]=_$_4d5e[32];div2[_$_4d5e[49]](0);};}else {if(d==3){e=document[_$_4d5e[1]](_$_4d5e[51]);if(e[_$_4d5e[44]]==_$_4d5e[45]){e[_$_4d5e[44]]=_$_4d5e[46];e[_$_4d5e[48]][_$_4d5e[47]]=_$_4d5e[31];div4[_$_4d5e[49]](1);}else {e[_$_4d5e[44]]=_$_4d5e[45];e[_$_4d5e[48]][_$_4d5e[47]]=_$_4d5e[32];div4[_$_4d5e[49]](0);};}}};cockpit();if(b3[_$_4d5e[29]]==1){play();anim1[_$_4d5e[52]]();}else {stop();anim1[_$_4d5e[53]]();};}function stage(){ang=ang+ang1;if(Math[_$_4d5e[3]]*2<=ang){ang=0};var a=document[_$_4d5e[1]](_$_4d5e[0]);var b=a[_$_4d5e[14]](_$_4d5e[13]);b[_$_4d5e[42]](0,0,a[_$_4d5e[40]],a[_$_4d5e[41]]);cockpit();b[_$_4d5e[34]]();b[_$_4d5e[56]](725+10*Math[_$_4d5e[54]](ang),275+10*Math[_$_4d5e[55]](ang),5,0,2*Math[_$_4d5e[3]],false);b[_$_4d5e[17]]=_$_4d5e[57];b[_$_4d5e[58]]();}