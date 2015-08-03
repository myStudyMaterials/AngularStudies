app.controller("defaultCtrl", function ($scope) {

    $scope.todos = [
        { action: "Task One", complete: true },
        { action: "Task Two", complete: false },
        { action: "Task Three", complete: true },
        { action: "Task Four", complete: false },
        { action: "Task Five", complete: true }
    ];

});