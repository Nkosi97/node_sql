const {
    addNewVisitor,
    deleteVisitor,
    viewVisitor,
    listVisitor,
    updateVisitor,
    deleteAllVisitors
} = require("../src/node_sql");

addNewVisitor("Nkosinathi", 23, "06/11/2020", "15:40", "thando", "lovely");


  describe("node sql addNewVisitor", function() {   
    it("should save visitor data to the database", async function() {
      
        expect(Details.name).toEqual("Nkosinathi");
        expect(Details.age).toEqual(23);
        expect(Details.visit_date).toEqual("06/11/2020");
        expect(Details.visit_time).toEqual("15:40:00");
        expect(Details.assistant).toEqual("thando");
        expect(Details.comments).toEqual("lovely");

     

    }); 
});
