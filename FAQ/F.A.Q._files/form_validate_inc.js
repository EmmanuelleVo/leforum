/* AlgoWin 2009 - Web Pack */
/* This product are developped by Algo'Rythmes.com */
/* js/form_validate_inc.js */

function Validate_FormContact(form) {
	if ((form.elements['NomPrenom'].value=="") || (form.elements['NomPrenom'].value=="Nom & Prénom")) { 
		alert("Veuillez saisir votre nom et votre prénom"); 
		form.elements['NomPrenom'].focus(); 
		return false; 
	}
	if ((form.elements['EMail'].value=="E-mail") || (!ValidateEmail(form.elements['EMail'].value))) {
		alert("Veuillez saisir votre adresse e-mail"); 
		form.elements['EMail'].focus(); 
		return false; 
	}
	if ((form.elements['Objet'].value=="") || (form.elements['Objet'].value=="Objet")) { 
		alert("Veuillez péciser l'objet de votre demande"); 
		form.elements['Objet'].focus(); 
		return false; 
	}
	if ((form.elements['Message'].value=="") || (form.elements['Message'].value=="Message")) { 
		alert("Veuillez saisir votre message"); 
		form.elements['Message'].focus(); 
		return false; 
  }
  return true;		
}

function Validate_FormNewsletter(form) {
	if (form.elements['Title'].value=="0") { 
		alert("Veuillez choisir une civilité"); 
		form.elements['Title'].focus(); 
		return false; 
	}	
	if ((form.elements['FirstName'].value=="") || (form.elements['FirstName'].value=="Prénom")) { 
		alert("Veuillez saisir votre prénom"); 
		form.elements['FirstName'].focus(); 
		return false; 
	}
	if ((form.elements['LastName'].value=="") || (form.elements['LastName'].value=="Nom")) { 
		alert("Veuillez saisir votre nom"); 
		form.elements['LastName'].focus(); 
		return false; 
	}
	if ((form.elements['EMail'].value=="E-mail") || (!ValidateEmail(form.elements['EMail'].value))) {
		alert("Veuillez saisir votre adresse e-mail"); 
		form.elements['EMail'].focus(); 
		return false; 
	}
	if ((form.elements['ConfirmEMail'].value=="Confirmation E-mail") || (!ValidateEmail(form.elements['ConfirmEMail'].value))) {
		alert("Veuillez saisir votre confirmation d'adresse e-mail"); 
		form.elements['ConfirmEMail'].focus(); 
		return false; 
	}
		if (form.elements['EMail'].value != form.elements['ConfirmEMail'].value) {
		alert("Votre adresse e-mail et sa confirmation ne sont pas identiques"); 
		form.elements['EMail'].focus(); 
		return false; 
	}
	if (!form.elements['Acceptation'].checked) { 
		alert("Veuillez confirmer votre inscription VOLONTAIRE"); 
		form.elements['Acceptation'].focus(); 
		return false; 
	}
  return true;		
}

function Validate_FormConfirmNewsletter(form) {
	if (form.elements['Title'].value=="0") { 
		alert("Veuillez choisir une civilité"); 
		form.elements['Title'].focus(); 
		return false; 
	}	
	if ((form.elements['FirstName'].value=="") || (form.elements['FirstName'].value=="Prénom")) { 
		alert("Veuillez saisir votre prénom"); 
		form.elements['FirstName'].focus(); 
		return false; 
	}
	if ((form.elements['LastName'].value=="") || (form.elements['LastName'].value=="Nom")) { 
		alert("Veuillez saisir votre nom"); 
		form.elements['LastName'].focus(); 
		return false; 
	}
	if ((form.elements['EMail'].value=="E-mail") || (!ValidateEmail(form.elements['EMail'].value))) {
		alert("Veuillez saisir votre adresse e-mail"); 
		form.elements['EMail'].focus(); 
		return false; 
	}
  return true;		
}

function Validate_FormRequestNewsletter(form) {
	if ((form.elements['EMail'].value=="E-mail") || (!ValidateEmail(form.elements['EMail'].value))) {
		alert("Veuillez saisir votre adresse e-mail"); 
		form.elements['EMail'].focus(); 
		return false; 
	}
  return true;		
}

function ValidateEmail(sEmail) { 
	var reEmail=/^(.+)@(.+)$/; 
	var reQuotedString="(\"[^\"]*\")";
	var reIPDomain=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;
	var reValidCharString="\[^\\s\\(\\)><@,;:\\\\\\\"\\.\\[\\]\]+";
	var reGetString="(" + reValidCharString + "|" + reQuotedString + ")";
	var reUserName=new RegExp("^" + reGetString + "(\\." + reGetString + ")*$");
	var reDomain=new RegExp("^" + reValidCharString + "(\\." + reValidCharString +")*$");
	var reWholeCharString=new RegExp("^" + reValidCharString + "$");

	var matchArray=sEmail.match(reEmail);
	if (matchArray==null) 
		return false; 
	var sUsername=matchArray[1];
	var sDomain=matchArray[2];

	for (i=0; i<sUsername.length; i++) {
    if (sUsername.charCodeAt(i)>127) 
			return false; 
	} 
	if (sUsername.match(reUserName)==null) 
		return false;

	for (i=0; i<sDomain.length; i++) {
    if (sDomain.charCodeAt(i)>127) 
			return false;
	} 

	var arrIPNums=sDomain.match(reIPDomain);
	if (arrIPNums!=null) {
    for (var i=1;i<=4;i++) { 
      if (arrIPNums>255) 
				return false; 
    }    
	} 
	else {
    var arrDomains=sDomain.split(".");
    var iDomainLen=arrDomains.length;
    if (iDomainLen<2) 
			return false; 
    for (i=0;i<iDomainLen;i++) { 
      if (arrDomains[i].search(reWholeCharString)==-1) 
				return false; 
    } 
	}
	return true;
} 