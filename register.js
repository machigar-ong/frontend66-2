function handleSubmit(event) {
	event.preventDefault()
	const form = document.forms['register-form']

	if (!form['office-name'].value || !form['contact-name'].value || !form['contact-number'].value) {
	    alert("ชื่อบริษัท ชื่อผู้ติดต่อ เบอร์ผู้ติดต่อ ห้ามเป็นค่าว่าง")
        return
	}

	if (form['chair'].value < 1 || form['chair'].value > 10) {
		alert('จำนวนเก้าอี้ ต้องอยู่ระหว่าง 1 ถึง 10')
        return
	}
    
    alert("Valid")
}
