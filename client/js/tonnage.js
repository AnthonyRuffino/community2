function checkForZero(field) {
        if (field.value == 0 || field.value.length == 0) {
            alert ("This field can't be 0!");
            field.focus(); }
        else
	    calculateTonnageRect(field.form);
    }

    function rectangular_calc_Click(form) {
        if (form.len.value <= 0 || form.len.value.length == 0) {
            alert ("The Length field must be greater than 0!");
            form.len.focus(); }
        else if (form.wid.value <= 0 || form.wid.value.length == 0) {
            alert ("The Width field must be greater than 0!");
            form.wid.focus(); }
        else if (form.depth.value == 0 || form.depth.value.length == 0) {
            alert ("The Depth field must be greater than 0!");
            form.depth.focus(); }
        else
            calculateTonnageRect(form);
    }

    function calculateTonnageRect(form) {
        var area = form.len.value * form.wid.value;
  	    form.area.value = area;
  	    
  	    var cy = area * form.depth.value / 324;
  	    form.cy.value = cy;
  	    
  	    form.tonnage.value = cy * 1.35;
    }