/// <reference path='../angularjs/angular.d.ts'/>
/// <reference path="ng-toastr.d.ts" />

class NgToastrTestController {

    static $inject = ['$scope', 'ngToastr'];

    constructor($scope:ng.IScope, ngToastr: ngToastr.INgToastrService) {
        ngToastr.error('Your error message goes here!', 'error');
        ngToastr.success('Your error message goes here!', 'error', {allowHtml: true});
    }
};
