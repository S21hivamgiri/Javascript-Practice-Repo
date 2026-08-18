function getAmount() {
  this.totalAmount = 0;
  this.lac = function (val) {
    this.totalAmount += val * 100000;
    return this;
  };
  this.crore = function (val) {
    this.totalAmount += val * 10000000;
    return this;
  };
  this.value = function () {
    return this.totalAmount;
  };
  return this;
}

console.log(getAmount().lac(14).crore(3).value());
