define(["jquery","accordion","matchMedia"],function(a){a.widget("mage.EloomFooterLinks",{_init:function(){mediaCheck({media:"(min-width: 768px)",entry:function(){},exit:function(){a(".footer div.accordion").accordion({openedState:"active",collapsible:!0,active:[],multipleCollapsible:!0})}})}});return a.mage.EloomFooterLinks});