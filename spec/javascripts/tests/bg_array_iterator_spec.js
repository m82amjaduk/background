try {
  describe("BGArrayIterator", function() {
    describe("checking element counts in next_by_item", function() {
      it("should count once for each element in the array", function() {
        var iterator, no_op, test_array, test_count;
        test_array = [1, 2, 3, 4];
        test_count = 0;
        iterator = new BGArrayIterator(test_array, 1);
        while (!iterator.next_by_item(function() {
            return test_count++;
          })) {
          no_op = true;
        }
        return expect(test_count === test_array.length).toBeTruthy();
      });
      it("should count once for each element in the array with batch size 2", function() {
        var iterator, no_op, test_array, test_count;
        test_array = [1, 2, 3, 4];
        test_count = 0;
        iterator = new BGArrayIterator(test_array, 2);
        while (!iterator.next_by_item(function() {
            return test_count++;
          })) {
          no_op = true;
        }
        return expect(test_count === test_array.length).toBeTruthy();
      });
      return it("should count once for each element in the array with batch size 3 and an odd number of elements", function() {
        var iterator, no_op, test_array, test_count;
        test_array = [1, 2, 3, 4, 5];
        test_count = 0;
        iterator = new BGArrayIterator(test_array, 3);
        while (!iterator.next_by_item(function() {
            return test_count++;
          })) {
          no_op = true;
        }
        return expect(test_count === test_array.length).toBeTruthy();
      });
    });
    describe("checking element values match in next_by_item", function() {
      it("should refer to the correct elements in next_by_item batch size 1", function() {
        var iterator, no_op, test_array, test_count, _results;
        test_array = [1, 2, 3, 4];
        test_count = 0;
        iterator = new BGArrayIterator(test_array, 1);
        _results = [];
        while (!iterator.next_by_item(function(entry) {
            expect(entry === test_array[test_count]).toBeTruthy();
            return test_count++;
          })) {
          _results.push(no_op = true);
        }
        return _results;
      });
      return it("should refer to the correct elements in next_by_item batch size 3", function() {
        var iterator, no_op, test_array, test_count, _results;
        test_array = [1, 2, 3, 4, 5];
        test_count = 0;
        iterator = new BGArrayIterator(test_array, 1);
        _results = [];
        while (!iterator.next_by_item(function(entry) {
            expect(entry === test_array[test_count]).toBeTruthy();
            return test_count++;
          })) {
          _results.push(no_op = true);
        }
        return _results;
      });
    });
    describe("checking element counts in next_by_slice", function() {
      it("should count once for each element in the array", function() {
        var iterator, no_op, test_array, test_count;
        test_array = [1, 2, 3, 4];
        test_count = 0;
        iterator = new BGArrayIterator(test_array, 1);
        while (!iterator.next_by_slice(function(slice) {
            var entry, _i, _len, _results;
            _results = [];
            for (_i = 0, _len = slice.length; _i < _len; _i++) {
              entry = slice[_i];
              _results.push(test_count++);
            }
            return _results;
          })) {
          no_op = true;
        }
        return expect(test_count === test_array.length).toBeTruthy();
      });
      it("should count once for each element in the array with batch size 2", function() {
        var iterator, no_op, test_array, test_count;
        test_array = [1, 2, 3, 4];
        test_count = 0;
        iterator = new BGArrayIterator(test_array, 2);
        while (!iterator.next_by_slice(function(slice) {
            var entry, _i, _len, _results;
            _results = [];
            for (_i = 0, _len = slice.length; _i < _len; _i++) {
              entry = slice[_i];
              _results.push(test_count++);
            }
            return _results;
          })) {
          no_op = true;
        }
        return expect(test_count === test_array.length).toBeTruthy();
      });
      return it("should count once for each element in the array with batch size 3 and an odd number of elements", function() {
        var iterator, no_op, test_array, test_count;
        test_array = [1, 2, 3, 4, 5];
        test_count = 0;
        iterator = new BGArrayIterator(test_array, 3);
        while (!iterator.next_by_slice(function(slice) {
            var entry, _i, _len, _results;
            _results = [];
            for (_i = 0, _len = slice.length; _i < _len; _i++) {
              entry = slice[_i];
              _results.push(test_count++);
            }
            return _results;
          })) {
          no_op = true;
        }
        return expect(test_count === test_array.length).toBeTruthy();
      });
    });
    return describe("checking element values match in next_by_slice", function() {
      it("should refer to the correct elements in next_by_item batch size 1", function() {
        var iterator, no_op, test_array, test_count, _results;
        test_array = [1, 2, 3, 4];
        test_count = 0;
        iterator = new BGArrayIterator(test_array, 1);
        _results = [];
        while (!iterator.next_by_slice(function(slice) {
            var entry, _i, _len, _results2;
            _results2 = [];
            for (_i = 0, _len = slice.length; _i < _len; _i++) {
              entry = slice[_i];
              _results2.push((function(entry) {
                expect(entry === test_array[test_count]).toBeTruthy();
                return test_count++;
              })(entry));
            }
            return _results2;
          })) {
          _results.push(no_op = true);
        }
        return _results;
      });
      return it("should refer to the correct elements in next_by_item batch size 3", function() {
        var iterator, no_op, test_array, test_count, _results;
        test_array = [1, 2, 3, 4, 5];
        test_count = 0;
        iterator = new BGArrayIterator(test_array, 1);
        _results = [];
        while (!iterator.next_by_slice(function(slice) {
            var entry, _i, _len, _results2;
            _results2 = [];
            for (_i = 0, _len = slice.length; _i < _len; _i++) {
              entry = slice[_i];
              _results2.push((function(entry) {
                expect(entry === test_array[test_count]).toBeTruthy();
                return test_count++;
              })(entry));
            }
            return _results2;
          })) {
          _results.push(no_op = true);
        }
        return _results;
      });
    });
  });
} catch (error) {
  alert("BGArrayIterator specs failed: '" + error + "'");
}