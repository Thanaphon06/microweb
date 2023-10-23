FOR APPLE USER
Download MicroBlock for MAC https://bit.ly/3plAuLj

goto /Applications/microBlock IDE.app
git clone https://github.com/UpSkillAsia/beetlecar_v1.git  

mv beetlecar_v1 Contents/Resources/app/microBlock-IDE/boards
mv Contents/Resources/app/microBlock-IDE/boards/beetlecar_v1/install/index.js Contents/Resources/app/microBlock-IDE/ 

EDIT /Applications/microBlock IDE.app/Contents/Resources/app/microBlock-IDE/index.html -> change <title>microBlock IDE for UpSkill</title>

EDIT /Applications/microBlock IDE.app/Contents/Resources/app/microBlock-IDE/manifest.json
    Change
     "name": "microBlock IDE for UpSkill",
    "short_name": "microBlock IDE for UpSkill",


For Windows 64bit 
    Download 



Flash Firmware

python3 -m esptool -p /dev/tty.wchusbserial1420 --chip esp32 write_flash --flash_mode dio --flash_size detect --flash_freq 40m 0x1000 ./bootloader.bin 0x8000 ./partition-table.bin 0x10000 ./beetleV1_18Jul23.bin 
