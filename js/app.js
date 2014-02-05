App = Ember.Application.create();

App.Router.map(function() {
    this.route('index', {path: '/'});
    this.route('add', {path: '/add'});
    this.route('history', {path: '/history'});
});


App.IndexRoute = Ember.Route.extend({
  model: function() {
    return [
        {title: 'carotte'},
        {title: 'pomme de terre'},
        {title: 'salade'}
    ];
  }
});


App.IndexController = Ember.ArrayController.extend({

    actions: {
        add: function() {
            this.get('model').pushObject({title: this.get('item')});
            this.set('item', '');
        }
    }
});

App.TodoItemComponent = Ember.Component.extend({
    tagName: 'h4',
    classNames: ['todo-item', 'clickable'],
    classNameBindings: ['isDone'],

    click: function() {
        this.toggleItem();
        console.log('click');
    },

    toggleItem: function() {
        this.toggleProperty('isDone', true);
    }
});
