var result=[];

var assert=function(expression){
	result.push(expression);
};

var displayResult=function(result){
	for (i = 0; i < result.length; i++) {
		console.log("test "+i+" : "+result[i]);
	}
}

ps1=new PropertySet();
ps1.SetType("ps1Type");
/* test 1 */ assert(ps1.GetType()=="ps1Type");

ps1.SetValue("ps1Value");
/* test 2 */ assert(ps1.GetValue()=="ps1Value");

ps1.SetPropertySet("ps1Name1","ps1Value1");
/* test 3 */ assert(ps1.GetPropertySet("ps1Name1")=="ps1Value1");
/* test 4 */ assert(ps1.PropertyExists("ps1Name1")==1);
/* test 5 */ assert(ps1.PropertyExists("ps1Name0")==0);

ps1.SetPropertySet("ps1Name2","ps1Value2");
/* test 6 */ assert(ps1.GetPropertyCount()==2)

// order 
ps1.SetPropertySet("ps1Name3","ps1Value3");	
/* test 7 */ assert(ps1.GetFirstProperty()=="ps1Value1");
/* test 8 */ assert(ps1.GetNextProperty()=="ps1Name2");

ps1.RemoveProperty("ps1Name3");
/* test 9 */ assert(ps1.PropertyExists("ps1Name3")==0);


ps2=ps1.Reset();
/* test 10 */ assert(ps1.GetType("ps1Name1")=="");
/* test 11 */ assert(ps1.GetValue("ps1Name1")=="");
/* test 12 */ assert(ps1.GetPropertySet("ps1Name1")=="");



displayResult(result);
