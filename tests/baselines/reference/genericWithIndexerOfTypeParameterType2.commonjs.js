var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Collection = (function () {
    function Collection() {
    }
    return Collection;
})();
exports.Collection = Collection;

var List = (function (_super) {
    __extends(List, _super);
    function List() {
        _super.apply(this, arguments);
    }
    List.prototype.Bar = function () {
        // BUG 712326
        //var oldItem: ListItem = this._itemsByKey[""];
    };
    return List;
})(Collection);
exports.List = List;

var CollectionItem = (function () {
    function CollectionItem() {
    }
    return CollectionItem;
})();
exports.CollectionItem = CollectionItem;

var ListItem = (function (_super) {
    __extends(ListItem, _super);
    function ListItem() {
        _super.apply(this, arguments);
    }
    return ListItem;
})(CollectionItem);
exports.ListItem = ListItem;

