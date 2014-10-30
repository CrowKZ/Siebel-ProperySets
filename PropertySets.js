// Property Set Methods for Siebel eScript
var PropertySet = (function () {
	var errors= {
		"EmptyNameErr":"Name of Property Set can't be empty"
	}
    function PropertySet() {
    	this.type="";
    	this.value="";
    	this.index=0;
    	this.propertyNames=[];
    	this.properties={};
    	this.childs=[];
    }

    // Returns the value of the value attribute of a property set.
    PropertySet.prototype.GetValue = function () {
        return this.value;
    };

    // Returns the value of the type attribute of a property set.
    PropertySet.prototype.GetType = function () {
        return this.type;
    };

    // Sets the value for the value attribute of a property set.
    PropertySet.prototype.SetValue = function (value) {
        this.value=value;
    };

    // Sets the value for the type attribute of a property set.
    PropertySet.prototype.SetType = function (type) {
        this.type=type;
    };

    // Returns the value of a property.
    PropertySet.prototype.GetPropertySet = function (name) {
         value=this.properties[name];
         if(value)
         	return value;
         return "";
    };

    // Sets a value in the property of a property set.
    PropertySet.prototype.SetPropertySet = function (name,value) {
    	if(name == "") throw new Error(errors["EmptyNameErr"]);
    	var i = this.propertyNames.indexOf(name);
    	if(i == -1)
    		this.propertyNames.push(name);
        this.properties[name]=value;
    };

        // Returns a Boolean value that indicates if the property that the argument identifies exists.
    PropertySet.prototype.PropertyExists = function (name) {
        if(this.properties[name])
        	return 1;
        return 0;
    };
    
    // Returns the number of properties that exist in the current level in the hierarchy.
	PropertySet.prototype.GetPropertyCount = function () {
       return this.propertyNames.length;
    };

    // Returns the name of the first property in a property set.
    PropertySet.prototype.GetFirstProperty = function () {
        return this.properties[this.propertyNames[0]];
    };

    // Returns the name of the next property in a property set.
    PropertySet.prototype.GetNextProperty = function () {
    	this.index+=1;
        var nextPropertyName=this.propertyNames[this.index];
        if(nextPropertyName)
        	return nextPropertyName;
        return "";
    };

    // Removes a property from a property set.
    PropertySet.prototype.RemoveProperty = function (name) {
    	var i = this.propertyNames.indexOf(name);
		if(i != -1) 
			this.propertyNames.splice(i, 1);
        delete this.properties[name];
    };

    // Adds a child property set to a property set.
    PropertySet.prototype.AddChild = function (childPropertySet) {
    	return this.childs.push(childPropertySet);
    };

    // Returns the index number of a child property set.
    PropertySet.prototype.GetChild = function (index) {
    	return this.childs[index];
    };
    
    // Returns the number of child property sets that exist for a parent property set.
    PropertySet.prototype.GetChildCount = function () {
    	return this.childs.length;
    };
    
    // Inserts a child property set in a parent property set at a specific location.
    PropertySet.prototype.InsertChildAt = function (childPropertySet,index) {
    	this.childs.splice(index,0,childPropertySet);
    };

    // Removes a child property set from a parent property set.
    PropertySet.prototype.RemoveChild = function (index) {
    	this.childs.splice(i, 1);
    };

    // Returns a copy of a property set.
    PropertySet.prototype.Copy = function () {
    	var clone=function (obj) {
		    if (null == obj || "object" != typeof obj) return obj;
		    var copy = obj.constructor();
		    for (var attr in obj) {
		        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
		    }
		    return copy;
		}
    	var propertyNamesCopy=this.propertyNames.slice();
    	var propertiesCopy=clone(this.properties);
    	var childsCopy=this.childs.slice();
        var copy= new (function(type,value,index,propertyNames,properties,childs) {
	    	this.type=type;
	    	this.value=value;
	    	this.index=index;
	    	this.propertyNames=propertyNames;
	    	this.properties=properties;
	    	this.childs=childs;
    	})(this.type,this.value,this.index,propertyNamesCopy,propertiesCopy,childsCopy);
    	copy.prototype=PropertySet.prototype;
    	return copy;
    };

    // Removes every property and child property set from a property set.
    PropertySet.prototype.Reset = function () {
        this.type="";
    	this.value="";
    	this.propertyNames=[];
    	this.properties={};
    	this.childs=[];
    };

    return PropertySet;
})();