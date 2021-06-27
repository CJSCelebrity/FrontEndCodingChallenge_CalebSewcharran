import TextHighlight from 'vue-text-highlight'
import Vue from 'vue'

// eslint-disable-next-line vue/component-definition-name-casing
Vue.component('text-highlight', TextHighlight)

// To use this plugin
// In any page type <text-highlight :queries=""></text-highlight>
// The :queries prop is where you will specify what it will use to bring back highlighted text
// For example, :queries="searchText"
