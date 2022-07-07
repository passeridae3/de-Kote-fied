walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	// Cody is Cody
	v = v.replace(/\bKote\b/g, "Cody (in a weird accent)");
	v = v.replace(/\bkote\b/g, "cody (in a weird accent)");
	v = v.replace(/\bKOTE\b/g, "CODY (in a weird accent)");

	// vod means bro, bro
	// there may be issues with VOD being replaced, if so that line may be removed
	v = v.replace(/\bVod\b/g, "Bro");
	v = v.replace(/\bvod\b/g, "bro");
	v = v.replace(/\bVOD\b/g, "BRO");

	//alor? you mean king, right?
	v = v.replace(/\balor\b/g, "king");
	v = v.replace(/\bKing\b/g, "King");
	v = v.replace(/\bALOR\b/g, "KING");

	
	textNode.nodeValue = v;
}


