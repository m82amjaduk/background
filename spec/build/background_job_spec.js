try {
  describe("Background.Job", function() {
    return describe("new Background.Job()", function() {
      it("should not require an init_fn", function() {
        return expect(function() {
          return new Background.Job(null, function() {});
        }).not.toThrow();
      });
      it("should require a run_fn", function() {
        return expect(function() {
          return new Background.Job(null, null);
        }).toThrow('run_fn is mandatory');
      });
      return it("should not require a destroy_fn", function() {
        return expect(function() {
          return new Background.Job(null, (function() {}), null);
        }).not.toThrow();
      });
    });
  });
} catch (error) {
  alert("Background.Job specs failed: '" + error + "'");
}