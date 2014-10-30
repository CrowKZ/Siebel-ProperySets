// Property Set Methods for Siebel eScript
var PropertySet = (function () {
    function PropertySet() {
    	this.type="";
    	this.value="";
    	this.propertiesNames=[];
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
        return this.properties[name];
    };

    // Sets a value in the property of a property set.
    PropertySet.prototype.SetPropertySet = function (name,value) {
    	var i = this.propertiesNames.indexOf(name);
    	if(i != -1)
    		this.propertiesNames.push(name);
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
       return this.properties.length;
    };

    // Returns the name of the first property in a property set.
    PropertySet.prototype.GetFirstPropertySet = function () {
        return this.properties[this.propertiesNames[0]];
    };

    // Returns the name of the next property in a property set.
    PropertySet.prototype.GetNextPropertySet = function (name) {
    	var i = this.propertiesNames.indexOf(name);
        var nextPropertySet=this.properties[this.propertiesNames[i+1]];
        if(nextPropertySet)
        	return nextPropertySet;
        return "";
    };

    // Removes a property from a property set.
    PropertySet.prototype.RemovePropertySet = function (name) {
    	var i = this.propertiesNames.indexOf(name);
		if(i != -1) 
			this.propertiesNames.splice(i, 1);
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
        return new PropertySet();
    };

    // Removes every property and child property set from a property set.
    PropertySet.prototype.Reset = function () {
        this.type="";
    	this.value="";
    	this.propertiesNames=[];
    	this.properties={};
    	this.childs=[];
    };

    return PropertySet;
})();