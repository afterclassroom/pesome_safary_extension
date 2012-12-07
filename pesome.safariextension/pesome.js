safari.self.addEventListener("message", TransferEvent, false);


function mtest(){
	alert('h');
	  safari.self.tab.dispatchMessage("heyExtensionBar","Klaatu barada nikto");
}
function TransferEvent(event){
	mtest();
}