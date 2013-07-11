var TypeScript;
(function (TypeScript) {
    TypeScript.DiagnosticCode = {
        error_TS_0_1: "error TS{0}: {1}",
        warning_TS_0_1: "warning TS{0}: {1}",
        Unrecognized_escape_sequence: "Unrecognized escape sequence.",
        Unexpected_character_0: "Unexpected character {0}.",
        Missing_close_quote_character: "Missing close quote character.",
        Identifier_expected: "Identifier expected.",
        _0_keyword_expected: "'{0}' keyword expected.",
        _0_expected: "'{0}' expected.",
        Identifier_expected_0_is_a_keyword: "Identifier expected; '{0}' is a keyword.",
        Automatic_semicolon_insertion_not_allowed: "Automatic semicolon insertion not allowed.",
        Unexpected_token_0_expected: "Unexpected token; '{0}' expected.",
        Trailing_separator_not_allowed: "Trailing separator not allowed.",
        AsteriskSlash_expected: "'*/' expected.",
        public_or_private_modifier_must_precede_static: "'public' or 'private' modifier must precede 'static'.",
        Unexpected_token: "Unexpected token.",
        A_catch_clause_variable_cannot_have_a_type_annotation: "A catch clause variable cannot have a type annotation.",
        Rest_parameter_must_be_last_in_list: "Rest parameter must be last in list.",
        Parameter_cannot_have_question_mark_and_initializer: "Parameter cannot have question mark and initializer.",
        Required_parameter_cannot_follow_optional_parameter: "Required parameter cannot follow optional parameter.",
        Index_signatures_cannot_have_rest_parameters: "Index signatures cannot have rest parameters.",
        Index_signature_parameter_cannot_have_accessibility_modifiers: "Index signature parameter cannot have accessibility modifiers.",
        Index_signature_parameter_cannot_have_a_question_mark: "Index signature parameter cannot have a question mark.",
        Index_signature_parameter_cannot_have_an_initializer: "Index signature parameter cannot have an initializer.",
        Index_signature_must_have_a_type_annotation: "Index signature must have a type annotation.",
        Index_signature_parameter_must_have_a_type_annotation: "Index signature parameter must have a type annotation.",
        Index_signature_parameter_type_must_be_string_or_number: "Index signature parameter type must be 'string' or 'number'.",
        extends_clause_already_seen: "'extends' clause already seen.",
        extends_clause_must_precede_implements_clause: "'extends' clause must precede 'implements' clause.",
        Class_can_only_extend_single_type: "Class can only extend single type.",
        implements_clause_already_seen: "'implements' clause already seen.",
        Accessibility_modifier_already_seen: "Accessibility modifier already seen.",
        _0_modifier_must_precede_1_modifier: "'{0}' modifier must precede '{1}' modifier.",
        _0_modifier_already_seen: "'{0}' modifier already seen.",
        _0_modifier_cannot_appear_on_a_class_element: "'{0}' modifier cannot appear on a class element.",
        Interface_declaration_cannot_have_implements_clause: "Interface declaration cannot have 'implements' clause.",
        super_invocation_cannot_have_type_arguments: "'super' invocation cannot have type arguments.",
        Non_ambient_modules_cannot_use_quoted_names: "Non ambient modules cannot use quoted names.",
        Statements_are_not_allowed_in_ambient_contexts: "Statements are not allowed in ambient contexts.",
        Implementations_are_not_allowed_in_ambient_contexts: "Implementations are not allowed in ambient contexts.",
        declare_modifier_not_allowed_for_code_already_in_an_ambient_context: "'declare' modifier not allowed for code already in an ambient context.",
        Initializers_are_not_allowed_in_ambient_contexts: "Initializers are not allowed in ambient contexts.",
        Overload_and_ambient_signatures_cannot_specify_parameter_properties: "Overload and ambient signatures cannot specify parameter properties.",
        Function_implementation_expected: "Function implementation expected.",
        Constructor_implementation_expected: "Constructor implementation expected.",
        Function_overload_name_must_be_0: "Function overload name must be '{0}'.",
        _0_modifier_cannot_appear_on_a_module_element: "'{0}' modifier cannot appear on a module element.",
        declare_modifier_cannot_appear_on_an_interface_declaration: "'declare' modifier cannot appear on an interface declaration.",
        declare_modifier_required_for_top_level_element: "'declare' modifier required for top level element.",
        Rest_parameter_cannot_be_optional: "Rest parameter cannot be optional.",
        Rest_parameter_cannot_have_initializer: "Rest parameter cannot have initializer.",
        set_accessor_must_have_one_and_only_one_parameter: "'set' accessor must have one and only one parameter.",
        set_accessor_parameter_cannot_have_accessibility_modifier: "'set' accessor parameter cannot have accessibility modifier.",
        set_accessor_parameter_cannot_be_optional: "'set' accessor parameter cannot be optional.",
        set_accessor_parameter_cannot_have_initializer: "'set' accessor parameter cannot have initializer.",
        set_accessor_cannot_have_rest_parameter: "'set' accessor cannot have rest parameter.",
        get_accessor_cannot_have_parameters: "'get' accessor cannot have parameters.",
        Modifiers_cannot_appear_here: "Modifiers cannot appear here.",
        Accessors_are_only_when_targeting_EcmaScript5_and_higher: "Accessors are only when targeting EcmaScript5 and higher.",
        Class_name_cannot_be_0: "Class name cannot be '{0}'.",
        Interface_name_cannot_be_0: "Interface name cannot be '{0}'.",
        Enum_name_cannot_be_0: "Enum name cannot be '{0}'.",
        Module_name_cannot_be_0: "Module name cannot be '{0}'.",
        Enum_member_must_have_initializer: "Enum member must have initializer.",
        module_is_deprecated_Use_require_instead: "'module(...)' is deprecated. Use 'require(...)' instead.",
        Export_assignments_cannot_be_used_in_internal_modules: "Export assignments cannot be used in internal modules.",
        Export_assignment_not_allowed_in_module_with_exported_element: "Export assignment not allowed in module with exported element.",
        Module_cannot_have_multiple_export_assignments: "Module cannot have multiple export assignments.",
        Ambient_enum_elements_can_only_have_integer_literal_initializers: "Ambient enum elements can only have integer literal initializers.",
        module_class_interface_enum_import_or_statement: "module, class, interface, enum, import or statement",
        constructor_function_accessor_or_variable: "constructor, function, accessor or variable",
        statement: "statement",
        case_or_default_clause: "case or default clause",
        identifier: "identifier",
        call_construct_index_property_or_function_signature: "call, construct, index, property or function signature",
        expression: "expression",
        type_name: "type name",
        property_or_accessor: "property or accessor",
        parameter: "parameter",
        type: "type",
        type_parameter: "type parameter",
        Duplicate_identifier_0: "Duplicate identifier '{0}'.",
        The_name_0_does_not_exist_in_the_current_scope: "The name '{0}' does not exist in the current scope.",
        The_name_0_does_not_refer_to_a_value: "The name '{0}' does not refer to a value.",
        super_can_only_be_used_inside_a_class_instance_method: "'super' can only be used inside a class instance method.",
        The_left_hand_side_of_an_assignment_expression_must_be_a_variable_property_or_indexer: "The left-hand side of an assignment expression must be a variable, property or indexer.",
        Value_of_type_0_is_not_callable_Did_you_mean_to_include_new: "Value of type '{0}' is not callable. Did you mean to include 'new'?",
        Value_of_type_0_is_not_callable: "Value of type '{0}' is not callable.",
        Value_of_type_0_is_not_newable: "Value of type '{0}' is not newable.",
        Value_of_type_0_is_not_indexable_by_type_1: "Value of type '{0}' is not indexable by type '{1}'.",
        Operator_0_cannot_be_applied_to_types_1_and_2: "Operator '{0}' cannot be applied to types '{1}' and '{2}'.",
        Operator_0_cannot_be_applied_to_types_1_and_2_3: "Operator '{0}' cannot be applied to types '{1}' and '{2}': {3}",
        Cannot_convert_0_to_1: "Cannot convert '{0}' to '{1}'.",
        Cannot_convert_0_to_1_NL_2: "Cannot convert '{0}' to '{1}':{NL}{2}",
        Expected_var_class_interface_or_module: "Expected var, class, interface, or module.",
        Operator_0_cannot_be_applied_to_type_1: "Operator '{0}' cannot be applied to type '{1}'.",
        Getter_0_already_declared: "Getter '{0}' already declared.",
        Setter_0_already_declared: "Setter '{0}' already declared.",
        Accessors_cannot_have_type_parameters: "Accessors cannot have type parameters.",
        Exported_class_0_extends_private_class_1: "Exported class '{0}' extends private class '{1}'.",
        Exported_class_0_implements_private_interface_1: "Exported class '{0}' implements private interface '{1}'.",
        Exported_interface_0_extends_private_interface_1: "Exported interface '{0}' extends private interface '{1}'.",
        Exported_class_0_extends_class_from_inaccessible_module_1: "Exported class '{0}' extends class from inaccessible module {1}.",
        Exported_class_0_implements_interface_from_inaccessible_module_1: "Exported class '{0}' implements interface from inaccessible module {1}.",
        Exported_interface_0_extends_interface_from_inaccessible_module_1: "Exported interface '{0}' extends interface from inaccessible module {1}.",
        Public_static_property_0_of_exported_class_has_or_is_using_private_type_1: "Public static property '{0}' of exported class has or is using private type '{1}'.",
        Public_property_0_of_exported_class_has_or_is_using_private_type_1: "Public property '{0}' of exported class has or is using private type '{1}'.",
        Property_0_of_exported_interface_has_or_is_using_private_type_1: "Property '{0}' of exported interface has or is using private type '{1}'.",
        Exported_variable_0_has_or_is_using_private_type_1: "Exported variable '{0}' has or is using private type '{1}'.",
        Public_static_property_0_of_exported_class_is_using_inaccessible_module_1: "Public static property '{0}' of exported class is using inaccessible module {1}.",
        Public_property_0_of_exported_class_is_using_inaccessible_module_1: "Public property '{0}' of exported class is using inaccessible module {1}.",
        Property_0_of_exported_interface_is_using_inaccessible_module_1: "Property '{0}' of exported interface is using inaccessible module {1}.",
        Exported_variable_0_is_using_inaccessible_module_1: "Exported variable '{0}' is using inaccessible module {1}.",
        Parameter_0_of_constructor_from_exported_class_has_or_is_using_private_type_1: "Parameter '{0}' of constructor from exported class has or is using private type '{1}'.",
        Parameter_0_of_public_static_property_setter_from_exported_class_has_or_is_using_private_type_1: "Parameter '{0}' of public static property setter from exported class has or is using private type '{1}'.",
        Parameter_0_of_public_property_setter_from_exported_class_has_or_is_using_private_type_1: "Parameter '{0}' of public property setter from exported class has or is using private type '{1}'.",
        Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_type_1: "Parameter '{0}' of constructor signature from exported interface has or is using private type '{1}'.",
        Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_type_1: "Parameter '{0}' of call signature from exported interface has or is using private type '{1}'.",
        Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_type_1: "Parameter '{0}' of public static method from exported class has or is using private type '{1}'.",
        Parameter_0_of_public_method_from_exported_class_has_or_is_using_private_type_1: "Parameter '{0}' of public method from exported class has or is using private type '{1}'.",
        Parameter_0_of_method_from_exported_interface_has_or_is_using_private_type_1: "Parameter '{0}' of method from exported interface has or is using private type '{1}'.",
        Parameter_0_of_exported_function_has_or_is_using_private_type_1: "Parameter '{0}' of exported function has or is using private type '{1}'.",
        Parameter_0_of_constructor_from_exported_class_is_using_inaccessible_module_1: "Parameter '{0}' of constructor from exported class is using inaccessible module {1}.",
        Parameter_0_of_public_static_property_setter_from_exported_class_is_using_inaccessible_module_1: "Parameter '{0}' of public static property setter from exported class is using inaccessible module {1}.",
        Parameter_0_of_public_property_setter_from_exported_class_is_using_inaccessible_module_1: "Parameter '{0}' of public property setter from exported class is using inaccessible module {1}.",
        Parameter_0_of_constructor_signature_from_exported_interface_is_using_inaccessible_module_1: "Parameter '{0}' of constructor signature from exported interface is using inaccessible module {1}.",
        Parameter_0_of_call_signature_from_exported_interface_is_using_inaccessible_module_1: "Parameter '{0}' of call signature from exported interface is using inaccessible module {1}",
        Parameter_0_of_public_static_method_from_exported_class_is_using_inaccessible_module_1: "Parameter '{0}' of public static method from exported class is using inaccessible module {1}.",
        Parameter_0_of_public_method_from_exported_class_is_using_inaccessible_module_1: "Parameter '{0}' of public method from exported class is using inaccessible module {1}.",
        Parameter_0_of_method_from_exported_interface_is_using_inaccessible_module_1: "Parameter '{0}' of method from exported interface is using inaccessible module {1}.",
        Parameter_0_of_exported_function_is_using_inaccessible_module_1: "Parameter '{0}' of exported function is using inaccessible module {1}.",
        Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_private_type_0: "Return type of public static property getter from exported class has or is using private type '{0}'.",
        Return_type_of_public_property_getter_from_exported_class_has_or_is_using_private_type_0: "Return type of public property getter from exported class has or is using private type '{0}'.",
        Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_private_type_0: "Return type of constructor signature from exported interface has or is using private type '{0}'.",
        Return_type_of_call_signature_from_exported_interface_has_or_is_using_private_type_0: "Return type of call signature from exported interface has or is using private type '{0}'.",
        Return_type_of_index_signature_from_exported_interface_has_or_is_using_private_type_0: "Return type of index signature from exported interface has or is using private type '{0}'.",
        Return_type_of_public_static_method_from_exported_class_has_or_is_using_private_type_0: "Return type of public static method from exported class has or is using private type '{0}'.",
        Return_type_of_public_method_from_exported_class_has_or_is_using_private_type_0: "Return type of public method from exported class has or is using private type '{0}'.",
        Return_type_of_method_from_exported_interface_has_or_is_using_private_type_0: "Return type of method from exported interface has or is using private type '{0}'.",
        Return_type_of_exported_function_has_or_is_using_private_type_0: "Return type of exported function has or is using private type '{0}'.",
        Return_type_of_public_static_property_getter_from_exported_class_is_using_inaccessible_module_0: "Return type of public static property getter from exported class is using inaccessible module {0}.",
        Return_type_of_public_property_getter_from_exported_class_is_using_inaccessible_module_0: "Return type of public property getter from exported class is using inaccessible module {0}.",
        Return_type_of_constructor_signature_from_exported_interface_is_using_inaccessible_module_0: "Return type of constructor signature from exported interface is using inaccessible module {0}.",
        Return_type_of_call_signature_from_exported_interface_is_using_inaccessible_module_0: "Return type of call signature from exported interface is using inaccessible module {0}.",
        Return_type_of_index_signature_from_exported_interface_is_using_inaccessible_module_0: "Return type of index signature from exported interface is using inaccessible module {0}.",
        Return_type_of_public_static_method_from_exported_class_is_using_inaccessible_module_0: "Return type of public static method from exported class is using inaccessible module {0}.",
        Return_type_of_public_method_from_exported_class_is_using_inaccessible_module_0: "Return type of public method from exported class is using inaccessible module {0}.",
        Return_type_of_method_from_exported_interface_is_using_inaccessible_module_0: "Return type of method from exported interface is using inaccessible module {0}.",
        Return_type_of_exported_function_is_using_inaccessible_module_0: "Return type of exported function is using inaccessible module {0}.",
        new_T_cannot_be_used_to_create_an_array_Use_new_Array_T_instead: "'new T[]' cannot be used to create an array. Use 'new Array<T>()' instead.",
        A_parameter_list_must_follow_a_generic_type_argument_list_expected: "A parameter list must follow a generic type argument list. '(' expected.",
        Multiple_constructor_implementations_are_not_allowed: "Multiple constructor implementations are not allowed.",
        Unable_to_resolve_external_module_0: "Unable to resolve external module '{0}'.",
        Module_cannot_be_aliased_to_a_non_module_type: "Module cannot be aliased to a non-module type.",
        A_class_may_only_extend_another_class: "A class may only extend another class.",
        A_class_may_only_implement_another_class_or_interface: "A class may only implement another class or interface.",
        An_interface_may_only_extend_another_class_or_interface: "An interface may only extend another class or interface.",
        An_interface_cannot_implement_another_type: "An interface cannot implement another type.",
        Unable_to_resolve_type: "Unable to resolve type.",
        Unable_to_resolve_type_of_0: "Unable to resolve type of '{0}'.",
        Unable_to_resolve_type_parameter_constraint: "Unable to resolve type parameter constraint.",
        Type_parameter_constraint_cannot_be_a_primitive_type: "Type parameter constraint cannot be a primitive type.",
        Supplied_parameters_do_not_match_any_signature_of_call_target: "Supplied parameters do not match any signature of call target.",
        Supplied_parameters_do_not_match_any_signature_of_call_target_NL_0: "Supplied parameters do not match any signature of call target:{NL}{0}",
        Invalid_new_expression: "Invalid 'new' expression.",
        Call_signatures_used_in_a_new_expression_must_have_a_void_return_type: "Call signatures used in a 'new' expression must have a 'void' return type.",
        Could_not_select_overload_for_new_expression: "Could not select overload for 'new' expression.",
        Type_0_does_not_satisfy_the_constraint_1_for_type_parameter_2: "Type '{0}' does not satisfy the constraint '{1}' for type parameter '{2}'.",
        Could_not_select_overload_for_call_expression: "Could not select overload for 'call' expression.",
        Unable_to_invoke_type_with_no_call_signatures: "Unable to invoke type with no call signatures.",
        Calls_to_super_are_only_valid_inside_a_class: "Calls to 'super' are only valid inside a class.",
        Generic_type_0_requires_1_type_argument_s: "Generic type '{0}' requires {1} type argument(s).",
        Type_of_conditional_expression_cannot_be_determined_Best_common_type_could_not_be_found_between_0_and_1: "Type of conditional expression cannot be determined. Best common type could not be found between '{0}' and '{1}'.",
        Type_of_array_literal_cannot_be_determined_Best_common_type_could_not_be_found_for_array_elements: "Type of array literal cannot be determined. Best common type could not be found for array elements.",
        Could_not_find_enclosing_symbol_for_dotted_name_0: "Could not find enclosing symbol for dotted name '{0}'.",
        The_property_0_does_not_exist_on_value_of_type_1: "The property '{0}' does not exist on value of type '{1}'.",
        Could_not_find_symbol_0: "Could not find symbol '{0}'.",
        get_and_set_accessor_must_have_the_same_type: "'get' and 'set' accessor must have the same type.",
        this_cannot_be_referenced_in_current_location: "'this' cannot be referenced in current location.",
        Use_of_deprecated_type_bool_Use_boolean_instead: "Use of deprecated type 'bool'. Use 'boolean' instead.",
        Static_methods_cannot_reference_class_type_parameters: "Static methods cannot reference class type parameters.",
        Class_0_is_recursively_referenced_as_a_base_type_of_itself: "Class '{0}' is recursively referenced as a base type of itself.",
        Interface_0_is_recursively_referenced_as_a_base_type_of_itself: "Interface '{0}' is recursively referenced as a base type of itself.",
        super_property_access_is_permitted_only_in_a_constructor_instance_member_function_or_instance_member_accessor_of_a_derived_class: "'super' property access is permitted only in a constructor, instance member function, or instance member accessor of a derived class.",
        super_cannot_be_referenced_in_non_derived_classes: "'super' cannot be referenced in non-derived classes.",
        A_super_call_must_be_the_first_statement_in_the_constructor_when_a_class_contains_initialized_properties_or_has_parameter_properties: "A 'super' call must be the first statement in the constructor when a class contains initialized properties or has parameter properties.",
        Constructors_for_derived_classes_must_contain_a_super_call: "Constructors for derived classes must contain a 'super' call.",
        Super_calls_are_not_permitted_outside_constructors_or_in_local_functions_inside_constructors: "Super calls are not permitted outside constructors or in local functions inside constructors.",
        _0_1_is_inaccessible: "'{0}.{1}' is inaccessible.",
        this_cannot_be_referenced_within_module_bodies: "'this' cannot be referenced within module bodies.",
        Invalid_expression_types_not_known_to_support_the_addition_operator: "Invalid '+' expression - types not known to support the addition operator.",
        The_right_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_or_an_enum_type: "The right-hand side of an arithmetic operation must be of type 'any', 'number' or an enum type.",
        The_left_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_or_an_enum_type: "The left-hand side of an arithmetic operation must be of type 'any', 'number' or an enum type.",
        The_type_of_a_unary_arithmetic_operation_operand_must_be_of_type_any_number_or_an_enum_type: "The type of a unary arithmetic operation operand must be of type 'any', 'number' or an enum type.",
        Variable_declarations_of_a_for_statement_cannot_contain_a_type_annotation: "Variable declarations of a 'for' statement cannot contain a type annotation.",
        Variable_declarations_of_a_for_statement_must_be_of_types_string_or_any: "Variable declarations of a 'for' statement must be of types 'string' or 'any'.",
        The_right_operand_of_a_for_statement_must_be_of_type_any_an_object_type_or_a_type_parameter: "The right operand of a 'for' statement must be of type 'any', an object type or a type parameter.",
        The_left_hand_side_of_an_in_expression_must_be_of_types_string_or_any: "The left-hand side of an 'in' expression must be of types 'string' or 'any'.",
        The_right_hand_side_of_an_in_expression_must_be_of_type_any_an_object_type_or_a_type_parameter: "The right-hand side of an 'in' expression must be of type 'any', an object type or a type parameter.",
        The_left_hand_side_of_an_instanceOf_expression_must_be_of_type_any_an_object_type_or_a_type_parameter: "The left-hand side of an 'instanceOf' expression must be of type 'any', an object type or a type parameter.",
        The_right_hand_side_of_an_instanceOf_expression_must_be_of_type_any_or_a_subtype_of_the_Function_interface_type: "The right-hand side of an 'instanceOf' expression must be of type 'any' or a subtype of the 'Function' interface type.",
        Setters_cannot_return_a_value: "Setters cannot return a value.",
        Tried_to_set_variable_type_to_container_type_0: "Tried to set variable type to container type '{0}'.",
        Tried_to_set_variable_type_to_uninitialized_module_type_0: "Tried to set variable type to uninitialized module type '{0}'.",
        Function_0_declared_a_non_void_return_type_but_has_no_return_expression: "Function '{0}' declared a non-void return type, but has no return expression.",
        Getters_must_return_a_value: "Getters must return a value.",
        Getter_and_setter_accessors_do_not_agree_in_visibility: "Getter and setter accessors do not agree in visibility.",
        Invalid_left_hand_side_of_assignment_expression: "Invalid left-hand side of assignment expression.",
        Function_declared_a_non_void_return_type_but_has_no_return_expression: "Function declared a non-void return type, but has no return expression.",
        Cannot_resolve_return_type_reference: "Cannot resolve return type reference.",
        Constructors_cannot_have_a_return_type_of_void: "Constructors cannot have a return type of 'void'.",
        Subsequent_variable_declarations_must_have_the_same_type_Variable_0_must_be_of_type_1_but_here_has_type_2: "Subsequent variable declarations must have the same type.  Variable '{0}' must be of type '{1}', but here has type '{2}'.",
        All_symbols_within_a_with_block_will_be_resolved_to_any: "All symbols within a with block will be resolved to 'any'.",
        Import_declarations_in_an_internal_module_cannot_reference_an_external_module: "Import declarations in an internal module cannot reference an external module.",
        Class_0_declares_interface_1_but_does_not_implement_it_NL_2: "Class {0} declares interface {1} but does not implement it:{NL}{2}",
        Class_0_declares_class_1_as_an_implemented_interface_but_does_not_implement_it_NL_2: "Class {0} declares class {1} as an implemented interface but does not implement it:{NL}{2}",
        The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_property_or_indexer: "The operand of an increment or decrement operator must be a variable, property or indexer.",
        this_cannot_be_referenced_in_static_initializers_in_a_class_body: "'this' cannot be referenced in static initializers in a class body.",
        Class_0_cannot_extend_class_1_NL_2: "Class '{0}' cannot extend class '{1}':{NL}{2}",
        Interface_0_cannot_extend_class_1_NL_2: "Interface '{0}' cannot extend class '{1}':{NL}{2}",
        Interface_0_cannot_extend_interface_1_NL_2: "Interface '{0}' cannot extend interface '{1}':{NL}{2}",
        Duplicate_overload_signature_for_0: "Duplicate overload signature for '{0}'.",
        Duplicate_constructor_overload_signature: "Duplicate constructor overload signature.",
        Duplicate_overload_call_signature: "Duplicate overload call signature.",
        Duplicate_overload_construct_signature: "Duplicate overload construct signature.",
        Overload_signature_is_not_compatible_with_function_definition: "Overload signature is not compatible with function definition.",
        Overload_signature_is_not_compatible_with_function_definition_NL_0: "Overload signature is not compatible with function definition:{NL}{0}",
        Overload_signatures_must_all_be_public_or_private: "Overload signatures must all be public or private.",
        Overload_signatures_must_all_be_exported_or_local: "Overload signatures must all be exported or local.",
        Overload_signatures_must_all_be_ambient_or_non_ambient: "Overload signatures must all be ambient or non-ambient.",
        Overload_signatures_must_all_be_optional_or_required: "Overload signatures must all be optional or required.",
        Specialized_overload_signature_is_not_subtype_of_any_non_specialized_signature: "Specialized overload signature is not subtype of any non-specialized signature.",
        this_cannot_be_referenced_in_constructor_arguments: "'this' cannot be referenced in constructor arguments.",
        Static_member_cannot_be_accessed_off_an_instance_variable: "Static member cannot be accessed off an instance variable.",
        Instance_member_cannot_be_accessed_off_a_class: "Instance member cannot be accessed off a class.",
        Untyped_function_calls_may_not_accept_type_arguments: "Untyped function calls may not accept type arguments.",
        Non_generic_functions_may_not_accept_type_arguments: "Non-generic functions may not accept type arguments.",
        A_generic_type_may_not_reference_itself_with_a_wrapped_form_of_its_own_type_parameters: "A generic type may not reference itself with a wrapped form of its own type parameters.",
        Rest_parameters_must_be_array_types: "Rest parameters must be array types.",
        Overload_signature_implementation_cannot_use_specialized_type: "Overload signature implementation cannot use specialized type.",
        Export_assignments_may_only_be_used_at_the_top_level_of_external_modules: "Export assignments may only be used at the top-level of external modules.",
        Export_assignments_may_only_be_made_with_variables_functions_classes_interfaces_enums_and_internal_modules: "Export assignments may only be made with variables, functions, classes, interfaces, enums and internal modules",
        Only_public_instance_methods_of_the_base_class_are_accessible_via_the_super_keyword: "Only public instance methods of the base class are accessible via the 'super' keyword.",
        Numeric_indexer_type_0_must_be_a_subtype_of_string_indexer_type_1: "Numeric indexer type '{0}' must be a subtype of string indexer type '{1}'.",
        Numeric_indexer_type_0_must_be_a_subtype_of_string_indexer_type_1_NL_2: "Numeric indexer type '{0}' must be a subtype of string indexer type '{1}':{NL}{2}",
        All_numerically_named_properties_must_be_subtypes_of_numeric_indexer_type_0: "All numerically named properties must be subtypes of numeric indexer type '{0}'.",
        All_numerically_named_properties_must_be_subtypes_of_numeric_indexer_type_0_NL_1: "All numerically named properties must be subtypes of numeric indexer type '{0}':{NL}{1}",
        All_named_properties_must_be_subtypes_of_string_indexer_type_0: "All named properties must be subtypes of string indexer type '{0}'.",
        All_named_properties_must_be_subtypes_of_string_indexer_type_0_NL_1: "All named properties must be subtypes of string indexer type '{0}':{NL}{1}",
        Generic_type_references_must_include_all_type_arguments: "Generic type references must include all type arguments.",
        Default_arguments_are_not_allowed_in_an_overload_parameter: "Default arguments are not allowed in an overload parameter.",
        Overloads_cannot_differ_only_by_return_type: "Overloads cannot differ only by return type.",
        Function_expression_declared_a_non_void_return_type_but_has_no_return_expression: "Function expression declared a non-void return type, but has no return expression.",
        Import_declaration_referencing_identifier_from_internal_module_can_only_be_made_with_variables_functions_classes_interfaces_enums_and_internal_modules: "Import declaration referencing identifier from internal module can only be made with variables, functions, classes, interfaces, enums and internal modules.",
        Could_not_find_symbol_0_in_module_1: "Could not find symbol '{0}' in module '{1}'.",
        Unable_to_resolve_module_reference_0: "Unable to resolve module reference '{0}'.",
        Could_not_find_module_0_in_module_1: "Could not find module '{0}' in module '{1}'.",
        Type_0_is_missing_property_1_from_type_2: "Type '{0}' is missing property '{1}' from type '{2}'.",
        Types_of_property_0_of_types_1_and_2_are_incompatible: "Types of property '{0}' of types '{1}' and '{2}' are incompatible.",
        Types_of_property_0_of_types_1_and_2_are_incompatible_NL_3: "Types of property '{0}' of types '{1}' and '{2}' are incompatible:{NL}{3}",
        Property_0_defined_as_private_in_type_1_is_defined_as_public_in_type_2: "Property '{0}' defined as private in type '{1}' is defined as public in type '{2}'.",
        Property_0_defined_as_public_in_type_1_is_defined_as_private_in_type_2: "Property '{0}' defined as public in type '{1}' is defined as private in type '{2}'.",
        Types_0_and_1_define_property_2_as_private: "Types '{0}' and '{1}' define property '{2}' as private.",
        Call_signatures_of_types_0_and_1_are_incompatible: "Call signatures of types '{0}' and '{1}' are incompatible.",
        Call_signatures_of_types_0_and_1_are_incompatible_NL_2: "Call signatures of types '{0}' and '{1}' are incompatible:{NL}{2}",
        Type_0_requires_a_call_signature_but_type_1_lacks_one: "Type '{0}' requires a call signature, but type '{1}' lacks one.",
        Construct_signatures_of_types_0_and_1_are_incompatible: "Construct signatures of types '{0}' and '{1}' are incompatible.",
        Construct_signatures_of_types_0_and_1_are_incompatible_NL_2: "Construct signatures of types '{0}' and '{1}' are incompatible:{NL}{2}",
        Type_0_requires_a_construct_signature_but_type_1_lacks_one: "Type '{0}' requires a construct signature, but type '{1}' lacks one.",
        Index_signatures_of_types_0_and_1_are_incompatible: "Index signatures of types '{0}' and '{1}' are incompatible.",
        Index_signatures_of_types_0_and_1_are_incompatible_NL_2: "Index signatures of types '{0}' and '{1}' are incompatible:{NL}{2}",
        Call_signature_expects_0_or_fewer_parameters: "Call signature expects {0} or fewer parameters.",
        Could_not_apply_type_0_to_argument_1_which_is_of_type_2: "Could not apply type'{0}' to argument {1} which is of type '{2}'.",
        Class_0_defines_instance_member_accessor_1_but_extended_class_2_defines_it_as_instance_member_function: "Class '{0}' defines instance member accessor '{1}', but extended class '{2}' defines it as instance member function.",
        Class_0_defines_instance_member_property_1_but_extended_class_2_defines_it_as_instance_member_function: "Class '{0}' defines instance member property '{1}', but extended class '{2}' defines it as instance member function.",
        Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_accessor: "Class '{0}' defines instance member function '{1}', but extended class '{2}' defines it as instance member accessor.",
        Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_property: "Class '{0}' defines instance member function '{1}', but extended class '{2}' defines it as instance member property.",
        Types_of_static_property_0_of_class_1_and_class_2_are_incompatible: "Types of static property '{0}' of class '{1}' and class '{2}' are incompatible.",
        Types_of_static_property_0_of_class_1_and_class_2_are_incompatible_NL_3: "Types of static property '{0}' of class '{1}' and class '{2}' are incompatible:{NL}{3}",
        Type_reference_cannot_refer_to_container_0: "Type reference cannot refer to container '{0}'.",
        Type_reference_cannot_must_refer_to_type: "Type reference cannot must refer to type.",
        Enums_with_multiple_declarations_must_provide_an_initializer_for_the_first_enum_element: "Enums with multiple declarations must provide an initializer for the first enum element.",
        _0_overload_s: " (+ {0} overload(s))",
        Current_host_does_not_support_0_option: "Current host does not support '{0}' option.",
        ECMAScript_target_version_0_not_supported_Using_default_1_code_generation: "ECMAScript target version '{0}' not supported.  Using default '{1}' code generation.",
        Module_code_generation_0_not_supported_Using_default_1_code_generation: "Module code generation '{0}' not supported.  Using default '{1}' code generation.",
        Could_not_find_file_0: "Could not find file: '{0}'.",
        A_file_cannot_have_a_reference_to_itself: "A file cannot have a reference to itself.",
        Cannot_resolve_referenced_file_0: "Cannot resolve referenced file: '{0}'.",
        Cannot_find_the_common_subdirectory_path_for_the_input_files: "Cannot find the common subdirectory path for the input files.",
        Cannot_compile_dynamic_modules_when_emitting_into_single_file: "Cannot compile dynamic modules when emitting into single file.",
        Emit_Error_0: "Emit Error: {0}.",
        Cannot_read_file_0_1: "Cannot read file '{0}': {1}",
        Unsupported_file_encoding: "Unsupported file encoding.",
        Locale_must_be_of_the_form_language_or_language_territory_For_example_0_or_1: "Locale must be of the form <language> or <language>-<territory>. For example '{0}' or '{1}'.",
        Unsupported_locale_0: "Unsupported locale: '{0}'.",
        Execution_Failed_NL: "Execution Failed.{NL}",
        Should_not_emit_a_type_query: "Should not emit a type query",
        Should_not_emit_a_type_reference: "Should not emit a type reference",
        Invalid_call_to_up: "Invalid call to 'up'",
        Invalid_call_to_down: "Invalid call to 'down'",
        Base64_value_0_finished_with_a_continuation_bit: "Base64 value '{0}' finished with a continuation bit",
        Key_was_already_in_table: "Key was already in table",
        Unknown_option_0: "Unknown option '{0}'",
        Expected_0_arguments_to_message_got_1_instead: "Expected {0} arguments to message, got {1} instead",
        Expected_the_message_0_to_have_1_arguments_but_it_had_2: "Expected the message '{0}' to have {1} arguments, but it had {2}",
        Invalid_argument_0_1: "Invalid argument: {0}. {1}",
        Invalid_argument_0: "Invalid argument: {0}.",
        Argument_out_of_range_0: "Argument out of range: {0}.",
        Argument_null_0: "Argument null: {0}.",
        Operation_not_implemented_properly_by_subclass: "Operation not implemented properly by subclass.",
        Not_yet_implemented: "Not yet implemented.",
        Invalid_operation_0: "Invalid operation: {0}",
        Invalid_operation: "Invalid operation.",
        Couldn_t_delete_file_0: "Couldn't delete file '{0}'",
        Couldn_t_create_directory_0: "Couldn't create directory '{0}'",
        Error_while_executing_file_0: "Error while executing file '{0}': ",
        Concatenate_and_emit_output_to_single_file_Redirect_output_structure_to_the_directory: "Concatenate and emit output to single file | Redirect output structure to the directory",
        Generates_corresponding_0_file: "Generates corresponding {0} file",
        Specifies_the_location_where_debugger_should_locate_map_files_instead_of_generated_locations: "Specifies the location where debugger should locate map files instead of generated locations.",
        Specifies_the_location_where_debugger_should_locate_TypeScript_files_instead_of_source_locations: "Specifies the location where debugger should locate TypeScript files instead of source locations.",
        Watch_input_files: "Watch input files",
        Execute_the_script_after_compilation: "Execute the script after compilation",
        Minimize_whitespace: "Minimize whitespace",
        Propagate_constants_to_emitted_code: "Propagate constants to emitted code",
        Emit_comments_to_output: "Emit comments to output",
        Skip_resolution_and_preprocessing: "Skip resolution and preprocessing",
        Print_debug_output: "Print debug output",
        Do_not_include_a_default_0_with_global_declarations: "Do not include a default {0} with global declarations",
        Gather_diagnostic_info_about_the_compilation_process: "Gather diagnostic info about the compilation process",
        Typecheck_each_file_as_an_update_on_the_first: "Typecheck each file as an update on the first",
        Specify_ECMAScript_target_version_0_default_or_1: "Specify ECMAScript target version: \"{0}\" (default), or \"{1}\"",
        Specify_module_code_generation_0_default_or_1: "Specify module code generation: \"{0}\" (default) or \"{1}\"",
        Print_this_message: "Print this message",
        Force_file_resolution_to_be_case_sensitive: "Force file resolution to be case sensitive",
        Print_the_compiler_s_version_0: "Print the compiler's version: {0}",
        Allow_use_of_deprecated_0_type: "Allow use of deprecated \"{0}\" type",
        Allow_use_of_deprecated_0_keyword_when_referencing_an_external_module: "Allow use of deprecated \"{0}\" keyword when referencing an external module",
        Specify_locale_for_errors_and_messages_For_example_0_or_1: "Specify locale for errors and messages. For example '{0}' or '{1}'",
        Syntax_0: "Syntax:   {0}",
        options: "options",
        file: "file",
        Examples: "Examples:",
        Options: "Options:",
        Insert_command_line_options_and_files_from_a_file: "Insert command line options and files from a file.",
        Version_0: "Version {0}",
        Use_the_0_flag_to_see_options: "Use the '{0}' flag to see options",
        NL_Recompiling_0: "{NL}Recompiling ({0}):",
        STRING: "STRING",
        KIND: "KIND",
        FILE_DIRECTORY: "FILE|DIRECTORY",
        VERSION: "VERSION",
        This_version_of_the_Javascript_runtime_doesn_t_support_the_0_function: "This version of the Javascript runtime doesn't support the '{0}' function.",
        Looking_up_path_for_identifier_token_did_not_result_in_an_identifer: "Looking up path for identifier token did not result in an identifer.",
        Unknown_rule: "Unknown rule",
        Invalid_line_number_0: "Invalid line number ({0})"
    };
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function (TypeScript) {
    (function (DiagnosticCategory) {
        DiagnosticCategory[DiagnosticCategory["Warning"] = 0] = "Warning";
        DiagnosticCategory[DiagnosticCategory["Error"] = 1] = "Error";
        DiagnosticCategory[DiagnosticCategory["Message"] = 2] = "Message";
        DiagnosticCategory[DiagnosticCategory["NoPrefix"] = 3] = "NoPrefix";
    })(TypeScript.DiagnosticCategory || (TypeScript.DiagnosticCategory = {}));
    var DiagnosticCategory = TypeScript.DiagnosticCategory;
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function (TypeScript) {
    TypeScript.diagnosticInformationMap = {
        "error TS{0}: {1}": {
            "code": 0,
            "category": 3 /* NoPrefix */
        },
        "warning TS{0}: {1}": {
            "code": 1,
            "category": 3 /* NoPrefix */
        },
        "Unrecognized escape sequence.": {
            "code": 1000,
            "category": 1 /* Error */
        },
        "Unexpected character {0}.": {
            "code": 1001,
            "category": 1 /* Error */
        },
        "Missing close quote character.": {
            "code": 1002,
            "category": 1 /* Error */
        },
        "Identifier expected.": {
            "code": 1003,
            "category": 1 /* Error */
        },
        "'{0}' keyword expected.": {
            "code": 1004,
            "category": 1 /* Error */
        },
        "'{0}' expected.": {
            "code": 1005,
            "category": 1 /* Error */
        },
        "Identifier expected; '{0}' is a keyword.": {
            "code": 1006,
            "category": 1 /* Error */
        },
        "Automatic semicolon insertion not allowed.": {
            "code": 1007,
            "category": 1 /* Error */
        },
        "Unexpected token; '{0}' expected.": {
            "code": 1008,
            "category": 1 /* Error */
        },
        "Trailing separator not allowed.": {
            "code": 1009,
            "category": 1 /* Error */
        },
        "'*/' expected.": {
            "code": 1010,
            "category": 1 /* Error */
        },
        "'public' or 'private' modifier must precede 'static'.": {
            "code": 1011,
            "category": 1 /* Error */
        },
        "Unexpected token.": {
            "code": 1012,
            "category": 1 /* Error */
        },
        "A catch clause variable cannot have a type annotation.": {
            "code": 1013,
            "category": 1 /* Error */
        },
        "Rest parameter must be last in list.": {
            "code": 1014,
            "category": 1 /* Error */
        },
        "Parameter cannot have question mark and initializer.": {
            "code": 1015,
            "category": 1 /* Error */
        },
        "Required parameter cannot follow optional parameter.": {
            "code": 1016,
            "category": 1 /* Error */
        },
        "Index signatures cannot have rest parameters.": {
            "code": 1017,
            "category": 1 /* Error */
        },
        "Index signature parameter cannot have accessibility modifiers.": {
            "code": 1018,
            "category": 1 /* Error */
        },
        "Index signature parameter cannot have a question mark.": {
            "code": 1019,
            "category": 1 /* Error */
        },
        "Index signature parameter cannot have an initializer.": {
            "code": 1020,
            "category": 1 /* Error */
        },
        "Index signature must have a type annotation.": {
            "code": 1021,
            "category": 1 /* Error */
        },
        "Index signature parameter must have a type annotation.": {
            "code": 1022,
            "category": 1 /* Error */
        },
        "Index signature parameter type must be 'string' or 'number'.": {
            "code": 1023,
            "category": 1 /* Error */
        },
        "'extends' clause already seen.": {
            "code": 1024,
            "category": 1 /* Error */
        },
        "'extends' clause must precede 'implements' clause.": {
            "code": 1025,
            "category": 1 /* Error */
        },
        "Class can only extend single type.": {
            "code": 1026,
            "category": 1 /* Error */
        },
        "'implements' clause already seen.": {
            "code": 1027,
            "category": 1 /* Error */
        },
        "Accessibility modifier already seen.": {
            "code": 1028,
            "category": 1 /* Error */
        },
        "'{0}' modifier must precede '{1}' modifier.": {
            "code": 1029,
            "category": 1 /* Error */
        },
        "'{0}' modifier already seen.": {
            "code": 1030,
            "category": 1 /* Error */
        },
        "'{0}' modifier cannot appear on a class element.": {
            "code": 1031,
            "category": 1 /* Error */
        },
        "Interface declaration cannot have 'implements' clause.": {
            "code": 1032,
            "category": 1 /* Error */
        },
        "'super' invocation cannot have type arguments.": {
            "code": 1034,
            "category": 1 /* Error */
        },
        "Non ambient modules cannot use quoted names.": {
            "code": 1035,
            "category": 1 /* Error */
        },
        "Statements are not allowed in ambient contexts.": {
            "code": 1036,
            "category": 1 /* Error */
        },
        "Implementations are not allowed in ambient contexts.": {
            "code": 1037,
            "category": 1 /* Error */
        },
        "'declare' modifier not allowed for code already in an ambient context.": {
            "code": 1038,
            "category": 1 /* Error */
        },
        "Initializers are not allowed in ambient contexts.": {
            "code": 1039,
            "category": 1 /* Error */
        },
        "Overload and ambient signatures cannot specify parameter properties.": {
            "code": 1040,
            "category": 1 /* Error */
        },
        "Function implementation expected.": {
            "code": 1041,
            "category": 1 /* Error */
        },
        "Constructor implementation expected.": {
            "code": 1042,
            "category": 1 /* Error */
        },
        "Function overload name must be '{0}'.": {
            "code": 1043,
            "category": 1 /* Error */
        },
        "'{0}' modifier cannot appear on a module element.": {
            "code": 1044,
            "category": 1 /* Error */
        },
        "'declare' modifier cannot appear on an interface declaration.": {
            "code": 1045,
            "category": 1 /* Error */
        },
        "'declare' modifier required for top level element.": {
            "code": 1046,
            "category": 1 /* Error */
        },
        "Rest parameter cannot be optional.": {
            "code": 1047,
            "category": 1 /* Error */
        },
        "Rest parameter cannot have initializer.": {
            "code": 1048,
            "category": 1 /* Error */
        },
        "'set' accessor must have one and only one parameter.": {
            "code": 1049,
            "category": 1 /* Error */
        },
        "'set' accessor parameter cannot have accessibility modifier.": {
            "code": 1050,
            "category": 1 /* Error */
        },
        "'set' accessor parameter cannot be optional.": {
            "code": 1051,
            "category": 1 /* Error */
        },
        "'set' accessor parameter cannot have initializer.": {
            "code": 1052,
            "category": 1 /* Error */
        },
        "'set' accessor cannot have rest parameter.": {
            "code": 1053,
            "category": 1 /* Error */
        },
        "'get' accessor cannot have parameters.": {
            "code": 1054,
            "category": 1 /* Error */
        },
        "Modifiers cannot appear here.": {
            "code": 1055,
            "category": 1 /* Error */
        },
        "Accessors are only when targeting EcmaScript5 and higher.": {
            "code": 1056,
            "category": 1 /* Error */
        },
        "Class name cannot be '{0}'.": {
            "code": 1057,
            "category": 1 /* Error */
        },
        "Interface name cannot be '{0}'.": {
            "code": 1058,
            "category": 1 /* Error */
        },
        "Enum name cannot be '{0}'.": {
            "code": 1059,
            "category": 1 /* Error */
        },
        "Module name cannot be '{0}'.": {
            "code": 1060,
            "category": 1 /* Error */
        },
        "Enum member must have initializer.": {
            "code": 1061,
            "category": 1 /* Error */
        },
        "'module(...)' is deprecated. Use 'require(...)' instead.": {
            "code": 1062,
            "category": 0 /* Warning */
        },
        "Export assignments cannot be used in internal modules.": {
            "code": 1063,
            "category": 1 /* Error */
        },
        "Export assignment not allowed in module with exported element.": {
            "code": 1064,
            "category": 1 /* Error */
        },
        "Module cannot have multiple export assignments.": {
            "code": 1065,
            "category": 1 /* Error */
        },
        "Ambient enum elements can only have integer literal initializers.": {
            "code": 1066,
            "category": 1 /* Error */
        },
        "module, class, interface, enum, import or statement": {
            "code": 1067,
            "category": 3 /* NoPrefix */
        },
        "constructor, function, accessor or variable": {
            "code": 1068,
            "category": 3 /* NoPrefix */
        },
        "statement": {
            "code": 1069,
            "category": 3 /* NoPrefix */
        },
        "case or default clause": {
            "code": 1070,
            "category": 3 /* NoPrefix */
        },
        "identifier": {
            "code": 1071,
            "category": 3 /* NoPrefix */
        },
        "call, construct, index, property or function signature": {
            "code": 1072,
            "category": 3 /* NoPrefix */
        },
        "expression": {
            "code": 1073,
            "category": 3 /* NoPrefix */
        },
        "type name": {
            "code": 1074,
            "category": 3 /* NoPrefix */
        },
        "property or accessor": {
            "code": 1075,
            "category": 3 /* NoPrefix */
        },
        "parameter": {
            "code": 1076,
            "category": 3 /* NoPrefix */
        },
        "type": {
            "code": 1077,
            "category": 3 /* NoPrefix */
        },
        "type parameter": {
            "code": 1078,
            "category": 3 /* NoPrefix */
        },
        "Duplicate identifier '{0}'.": {
            "code": 2000,
            "category": 1 /* Error */
        },
        "The name '{0}' does not exist in the current scope.": {
            "code": 2001,
            "category": 1 /* Error */
        },
        "The name '{0}' does not refer to a value.": {
            "code": 2002,
            "category": 1 /* Error */
        },
        "'super' can only be used inside a class instance method.": {
            "code": 2003,
            "category": 1 /* Error */
        },
        "The left-hand side of an assignment expression must be a variable, property or indexer.": {
            "code": 2004,
            "category": 1 /* Error */
        },
        "Value of type '{0}' is not callable. Did you mean to include 'new'?": {
            "code": 2161,
            "category": 1 /* Error */
        },
        "Value of type '{0}' is not callable.": {
            "code": 2006,
            "category": 1 /* Error */
        },
        "Value of type '{0}' is not newable.": {
            "code": 2007,
            "category": 1 /* Error */
        },
        "Value of type '{0}' is not indexable by type '{1}'.": {
            "code": 2008,
            "category": 1 /* Error */
        },
        "Operator '{0}' cannot be applied to types '{1}' and '{2}'.": {
            "code": 2009,
            "category": 1 /* Error */
        },
        "Operator '{0}' cannot be applied to types '{1}' and '{2}': {3}": {
            "code": 2010,
            "category": 1 /* Error */
        },
        "Cannot convert '{0}' to '{1}'.": {
            "code": 2011,
            "category": 1 /* Error */
        },
        "Cannot convert '{0}' to '{1}':{NL}{2}": {
            "code": 2012,
            "category": 1 /* Error */
        },
        "Expected var, class, interface, or module.": {
            "code": 2013,
            "category": 1 /* Error */
        },
        "Operator '{0}' cannot be applied to type '{1}'.": {
            "code": 2014,
            "category": 1 /* Error */
        },
        "Getter '{0}' already declared.": {
            "code": 2015,
            "category": 1 /* Error */
        },
        "Setter '{0}' already declared.": {
            "code": 2016,
            "category": 1 /* Error */
        },
        "Accessors cannot have type parameters.": {
            "code": 2017,
            "category": 1 /* Error */
        },
        "Exported class '{0}' extends private class '{1}'.": {
            "code": 2018,
            "category": 1 /* Error */
        },
        "Exported class '{0}' implements private interface '{1}'.": {
            "code": 2019,
            "category": 1 /* Error */
        },
        "Exported interface '{0}' extends private interface '{1}'.": {
            "code": 2020,
            "category": 1 /* Error */
        },
        "Exported class '{0}' extends class from inaccessible module {1}.": {
            "code": 2021,
            "category": 1 /* Error */
        },
        "Exported class '{0}' implements interface from inaccessible module {1}.": {
            "code": 2022,
            "category": 1 /* Error */
        },
        "Exported interface '{0}' extends interface from inaccessible module {1}.": {
            "code": 2023,
            "category": 1 /* Error */
        },
        "Public static property '{0}' of exported class has or is using private type '{1}'.": {
            "code": 2024,
            "category": 1 /* Error */
        },
        "Public property '{0}' of exported class has or is using private type '{1}'.": {
            "code": 2025,
            "category": 1 /* Error */
        },
        "Property '{0}' of exported interface has or is using private type '{1}'.": {
            "code": 2026,
            "category": 1 /* Error */
        },
        "Exported variable '{0}' has or is using private type '{1}'.": {
            "code": 2027,
            "category": 1 /* Error */
        },
        "Public static property '{0}' of exported class is using inaccessible module {1}.": {
            "code": 2028,
            "category": 1 /* Error */
        },
        "Public property '{0}' of exported class is using inaccessible module {1}.": {
            "code": 2029,
            "category": 1 /* Error */
        },
        "Property '{0}' of exported interface is using inaccessible module {1}.": {
            "code": 2030,
            "category": 1 /* Error */
        },
        "Exported variable '{0}' is using inaccessible module {1}.": {
            "code": 2031,
            "category": 1 /* Error */
        },
        "Parameter '{0}' of constructor from exported class has or is using private type '{1}'.": {
            "code": 2032,
            "category": 1 /* Error */
        },
        "Parameter '{0}' of public static property setter from exported class has or is using private type '{1}'.": {
            "code": 2033,
            "category": 1 /* Error */
        },
        "Parameter '{0}' of public property setter from exported class has or is using private type '{1}'.": {
            "code": 2034,
            "category": 1 /* Error */
        },
        "Parameter '{0}' of constructor signature from exported interface has or is using private type '{1}'.": {
            "code": 2035,
            "category": 1 /* Error */
        },
        "Parameter '{0}' of call signature from exported interface has or is using private type '{1}'.": {
            "code": 2036,
            "category": 1 /* Error */
        },
        "Parameter '{0}' of public static method from exported class has or is using private type '{1}'.": {
            "code": 2037,
            "category": 1 /* Error */
        },
        "Parameter '{0}' of public method from exported class has or is using private type '{1}'.": {
            "code": 2038,
            "category": 1 /* Error */
        },
        "Parameter '{0}' of method from exported interface has or is using private type '{1}'.": {
            "code": 2039,
            "category": 1 /* Error */
        },
        "Parameter '{0}' of exported function has or is using private type '{1}'.": {
            "code": 2040,
            "category": 1 /* Error */
        },
        "Parameter '{0}' of constructor from exported class is using inaccessible module {1}.": {
            "code": 2041,
            "category": 1 /* Error */
        },
        "Parameter '{0}' of public static property setter from exported class is using inaccessible module {1}.": {
            "code": 2042,
            "category": 1 /* Error */
        },
        "Parameter '{0}' of public property setter from exported class is using inaccessible module {1}.": {
            "code": 2043,
            "category": 1 /* Error */
        },
        "Parameter '{0}' of constructor signature from exported interface is using inaccessible module {1}.": {
            "code": 2044,
            "category": 1 /* Error */
        },
        "Parameter '{0}' of call signature from exported interface is using inaccessible module {1}": {
            "code": 2045,
            "category": 1 /* Error */
        },
        "Parameter '{0}' of public static method from exported class is using inaccessible module {1}.": {
            "code": 2046,
            "category": 1 /* Error */
        },
        "Parameter '{0}' of public method from exported class is using inaccessible module {1}.": {
            "code": 2047,
            "category": 1 /* Error */
        },
        "Parameter '{0}' of method from exported interface is using inaccessible module {1}.": {
            "code": 2048,
            "category": 1 /* Error */
        },
        "Parameter '{0}' of exported function is using inaccessible module {1}.": {
            "code": 2049,
            "category": 1 /* Error */
        },
        "Return type of public static property getter from exported class has or is using private type '{0}'.": {
            "code": 2050,
            "category": 1 /* Error */
        },
        "Return type of public property getter from exported class has or is using private type '{0}'.": {
            "code": 2051,
            "category": 1 /* Error */
        },
        "Return type of constructor signature from exported interface has or is using private type '{0}'.": {
            "code": 2052,
            "category": 1 /* Error */
        },
        "Return type of call signature from exported interface has or is using private type '{0}'.": {
            "code": 2053,
            "category": 1 /* Error */
        },
        "Return type of index signature from exported interface has or is using private type '{0}'.": {
            "code": 2054,
            "category": 1 /* Error */
        },
        "Return type of public static method from exported class has or is using private type '{0}'.": {
            "code": 2055,
            "category": 1 /* Error */
        },
        "Return type of public method from exported class has or is using private type '{0}'.": {
            "code": 2056,
            "category": 1 /* Error */
        },
        "Return type of method from exported interface has or is using private type '{0}'.": {
            "code": 2057,
            "category": 1 /* Error */
        },
        "Return type of exported function has or is using private type '{0}'.": {
            "code": 2058,
            "category": 1 /* Error */
        },
        "Return type of public static property getter from exported class is using inaccessible module {0}.": {
            "code": 2059,
            "category": 1 /* Error */
        },
        "Return type of public property getter from exported class is using inaccessible module {0}.": {
            "code": 2060,
            "category": 1 /* Error */
        },
        "Return type of constructor signature from exported interface is using inaccessible module {0}.": {
            "code": 2061,
            "category": 1 /* Error */
        },
        "Return type of call signature from exported interface is using inaccessible module {0}.": {
            "code": 2062,
            "category": 1 /* Error */
        },
        "Return type of index signature from exported interface is using inaccessible module {0}.": {
            "code": 2063,
            "category": 1 /* Error */
        },
        "Return type of public static method from exported class is using inaccessible module {0}.": {
            "code": 2064,
            "category": 1 /* Error */
        },
        "Return type of public method from exported class is using inaccessible module {0}.": {
            "code": 2065,
            "category": 1 /* Error */
        },
        "Return type of method from exported interface is using inaccessible module {0}.": {
            "code": 2066,
            "category": 1 /* Error */
        },
        "Return type of exported function is using inaccessible module {0}.": {
            "code": 2067,
            "category": 1 /* Error */
        },
        "'new T[]' cannot be used to create an array. Use 'new Array<T>()' instead.": {
            "code": 2068,
            "category": 1 /* Error */
        },
        "A parameter list must follow a generic type argument list. '(' expected.": {
            "code": 2069,
            "category": 1 /* Error */
        },
        "Multiple constructor implementations are not allowed.": {
            "code": 2070,
            "category": 1 /* Error */
        },
        "Unable to resolve external module '{0}'.": {
            "code": 2071,
            "category": 1 /* Error */
        },
        "Module cannot be aliased to a non-module type.": {
            "code": 2072,
            "category": 1 /* Error */
        },
        "A class may only extend another class.": {
            "code": 2073,
            "category": 1 /* Error */
        },
        "A class may only implement another class or interface.": {
            "code": 2074,
            "category": 1 /* Error */
        },
        "An interface may only extend another class or interface.": {
            "code": 2075,
            "category": 1 /* Error */
        },
        "An interface cannot implement another type.": {
            "code": 2076,
            "category": 1 /* Error */
        },
        "Unable to resolve type.": {
            "code": 2077,
            "category": 1 /* Error */
        },
        "Unable to resolve type of '{0}'.": {
            "code": 2078,
            "category": 1 /* Error */
        },
        "Unable to resolve type parameter constraint.": {
            "code": 2079,
            "category": 1 /* Error */
        },
        "Type parameter constraint cannot be a primitive type.": {
            "code": 2080,
            "category": 1 /* Error */
        },
        "Supplied parameters do not match any signature of call target.": {
            "code": 2081,
            "category": 1 /* Error */
        },
        "Supplied parameters do not match any signature of call target:{NL}{0}": {
            "code": 2082,
            "category": 1 /* Error */
        },
        "Invalid 'new' expression.": {
            "code": 2083,
            "category": 1 /* Error */
        },
        "Call signatures used in a 'new' expression must have a 'void' return type.": {
            "code": 2084,
            "category": 1 /* Error */
        },
        "Could not select overload for 'new' expression.": {
            "code": 2085,
            "category": 1 /* Error */
        },
        "Type '{0}' does not satisfy the constraint '{1}' for type parameter '{2}'.": {
            "code": 2086,
            "category": 1 /* Error */
        },
        "Could not select overload for 'call' expression.": {
            "code": 2087,
            "category": 1 /* Error */
        },
        "Unable to invoke type with no call signatures.": {
            "code": 2088,
            "category": 1 /* Error */
        },
        "Calls to 'super' are only valid inside a class.": {
            "code": 2089,
            "category": 1 /* Error */
        },
        "Generic type '{0}' requires {1} type argument(s).": {
            "code": 2090,
            "category": 1 /* Error */
        },
        "Type of conditional expression cannot be determined. Best common type could not be found between '{0}' and '{1}'.": {
            "code": 2091,
            "category": 1 /* Error */
        },
        "Type of array literal cannot be determined. Best common type could not be found for array elements.": {
            "code": 2092,
            "category": 1 /* Error */
        },
        "Could not find enclosing symbol for dotted name '{0}'.": {
            "code": 2093,
            "category": 1 /* Error */
        },
        "The property '{0}' does not exist on value of type '{1}'.": {
            "code": 2094,
            "category": 1 /* Error */
        },
        "Could not find symbol '{0}'.": {
            "code": 2095,
            "category": 1 /* Error */
        },
        "'get' and 'set' accessor must have the same type.": {
            "code": 2096,
            "category": 1 /* Error */
        },
        "'this' cannot be referenced in current location.": {
            "code": 2097,
            "category": 1 /* Error */
        },
        "Use of deprecated type 'bool'. Use 'boolean' instead.": {
            "code": 2098,
            "category": 0 /* Warning */
        },
        "Static methods cannot reference class type parameters.": {
            "code": 2099,
            "category": 1 /* Error */
        },
        "Class '{0}' is recursively referenced as a base type of itself.": {
            "code": 2100,
            "category": 1 /* Error */
        },
        "Interface '{0}' is recursively referenced as a base type of itself.": {
            "code": 2101,
            "category": 1 /* Error */
        },
        "'super' property access is permitted only in a constructor, instance member function, or instance member accessor of a derived class.": {
            "code": 2102,
            "category": 1 /* Error */
        },
        "'super' cannot be referenced in non-derived classes.": {
            "code": 2103,
            "category": 1 /* Error */
        },
        "A 'super' call must be the first statement in the constructor when a class contains initialized properties or has parameter properties.": {
            "code": 2104,
            "category": 1 /* Error */
        },
        "Constructors for derived classes must contain a 'super' call.": {
            "code": 2105,
            "category": 1 /* Error */
        },
        "Super calls are not permitted outside constructors or in local functions inside constructors.": {
            "code": 2106,
            "category": 1 /* Error */
        },
        "'{0}.{1}' is inaccessible.": {
            "code": 2107,
            "category": 1 /* Error */
        },
        "'this' cannot be referenced within module bodies.": {
            "code": 2108,
            "category": 1 /* Error */
        },
        "Invalid '+' expression - types not known to support the addition operator.": {
            "code": 2111,
            "category": 1 /* Error */
        },
        "The right-hand side of an arithmetic operation must be of type 'any', 'number' or an enum type.": {
            "code": 2112,
            "category": 1 /* Error */
        },
        "The left-hand side of an arithmetic operation must be of type 'any', 'number' or an enum type.": {
            "code": 2113,
            "category": 1 /* Error */
        },
        "The type of a unary arithmetic operation operand must be of type 'any', 'number' or an enum type.": {
            "code": 2114,
            "category": 1 /* Error */
        },
        "Variable declarations of a 'for' statement cannot contain a type annotation.": {
            "code": 2115,
            "category": 1 /* Error */
        },
        "Variable declarations of a 'for' statement must be of types 'string' or 'any'.": {
            "code": 2116,
            "category": 1 /* Error */
        },
        "The right operand of a 'for' statement must be of type 'any', an object type or a type parameter.": {
            "code": 2117,
            "category": 1 /* Error */
        },
        "The left-hand side of an 'in' expression must be of types 'string' or 'any'.": {
            "code": 2118,
            "category": 1 /* Error */
        },
        "The right-hand side of an 'in' expression must be of type 'any', an object type or a type parameter.": {
            "code": 2119,
            "category": 1 /* Error */
        },
        "The left-hand side of an 'instanceOf' expression must be of type 'any', an object type or a type parameter.": {
            "code": 2120,
            "category": 1 /* Error */
        },
        "The right-hand side of an 'instanceOf' expression must be of type 'any' or a subtype of the 'Function' interface type.": {
            "code": 2121,
            "category": 1 /* Error */
        },
        "Setters cannot return a value.": {
            "code": 2122,
            "category": 1 /* Error */
        },
        "Tried to set variable type to container type '{0}'.": {
            "code": 2123,
            "category": 1 /* Error */
        },
        "Tried to set variable type to uninitialized module type '{0}'.": {
            "code": 2124,
            "category": 1 /* Error */
        },
        "Function '{0}' declared a non-void return type, but has no return expression.": {
            "code": 2125,
            "category": 1 /* Error */
        },
        "Getters must return a value.": {
            "code": 2126,
            "category": 1 /* Error */
        },
        "Getter and setter accessors do not agree in visibility.": {
            "code": 2127,
            "category": 1 /* Error */
        },
        "Invalid left-hand side of assignment expression.": {
            "code": 2130,
            "category": 1 /* Error */
        },
        "Function declared a non-void return type, but has no return expression.": {
            "code": 2131,
            "category": 1 /* Error */
        },
        "Cannot resolve return type reference.": {
            "code": 2132,
            "category": 1 /* Error */
        },
        "Constructors cannot have a return type of 'void'.": {
            "code": 2133,
            "category": 1 /* Error */
        },
        "Subsequent variable declarations must have the same type.  Variable '{0}' must be of type '{1}', but here has type '{2}'.": {
            "code": 2134,
            "category": 1 /* Error */
        },
        "All symbols within a with block will be resolved to 'any'.": {
            "code": 2135,
            "category": 1 /* Error */
        },
        "Import declarations in an internal module cannot reference an external module.": {
            "code": 2136,
            "category": 1 /* Error */
        },
        "Class {0} declares interface {1} but does not implement it:{NL}{2}": {
            "code": 2137,
            "category": 1 /* Error */
        },
        "Class {0} declares class {1} as an implemented interface but does not implement it:{NL}{2}": {
            "code": 2138,
            "category": 1 /* Error */
        },
        "The operand of an increment or decrement operator must be a variable, property or indexer.": {
            "code": 2139,
            "category": 1 /* Error */
        },
        "'this' cannot be referenced in static initializers in a class body.": {
            "code": 2140,
            "category": 1 /* Error */
        },
        "Class '{0}' cannot extend class '{1}':{NL}{2}": {
            "code": 2141,
            "category": 1 /* Error */
        },
        "Interface '{0}' cannot extend class '{1}':{NL}{2}": {
            "code": 2142,
            "category": 1 /* Error */
        },
        "Interface '{0}' cannot extend interface '{1}':{NL}{2}": {
            "code": 2143,
            "category": 1 /* Error */
        },
        "Duplicate overload signature for '{0}'.": {
            "code": 2144,
            "category": 1 /* Error */
        },
        "Duplicate constructor overload signature.": {
            "code": 2145,
            "category": 1 /* Error */
        },
        "Duplicate overload call signature.": {
            "code": 2146,
            "category": 1 /* Error */
        },
        "Duplicate overload construct signature.": {
            "code": 2147,
            "category": 1 /* Error */
        },
        "Overload signature is not compatible with function definition.": {
            "code": 2148,
            "category": 1 /* Error */
        },
        "Overload signature is not compatible with function definition:{NL}{0}": {
            "code": 2149,
            "category": 1 /* Error */
        },
        "Overload signatures must all be public or private.": {
            "code": 2150,
            "category": 1 /* Error */
        },
        "Overload signatures must all be exported or local.": {
            "code": 2151,
            "category": 1 /* Error */
        },
        "Overload signatures must all be ambient or non-ambient.": {
            "code": 2152,
            "category": 1 /* Error */
        },
        "Overload signatures must all be optional or required.": {
            "code": 2153,
            "category": 1 /* Error */
        },
        "Specialized overload signature is not subtype of any non-specialized signature.": {
            "code": 2154,
            "category": 1 /* Error */
        },
        "'this' cannot be referenced in constructor arguments.": {
            "code": 2155,
            "category": 1 /* Error */
        },
        "Static member cannot be accessed off an instance variable.": {
            "code": 2156,
            "category": 1 /* Error */
        },
        "Instance member cannot be accessed off a class.": {
            "code": 2157,
            "category": 1 /* Error */
        },
        "Untyped function calls may not accept type arguments.": {
            "code": 2158,
            "category": 1 /* Error */
        },
        "Non-generic functions may not accept type arguments.": {
            "code": 2159,
            "category": 1 /* Error */
        },
        "A generic type may not reference itself with a wrapped form of its own type parameters.": {
            "code": 2160,
            "category": 1 /* Error */
        },
        "Rest parameters must be array types.": {
            "code": 2162,
            "category": 1 /* Error */
        },
        "Overload signature implementation cannot use specialized type.": {
            "code": 2163,
            "category": 1 /* Error */
        },
        "Export assignments may only be used at the top-level of external modules.": {
            "code": 2164,
            "category": 1 /* Error */
        },
        "Export assignments may only be made with variables, functions, classes, interfaces, enums and internal modules": {
            "code": 2165,
            "category": 1 /* Error */
        },
        "Only public instance methods of the base class are accessible via the 'super' keyword.": {
            "code": 2166,
            "category": 1 /* Error */
        },
        "Numeric indexer type '{0}' must be a subtype of string indexer type '{1}'.": {
            "code": 2167,
            "category": 1 /* Error */
        },
        "Numeric indexer type '{0}' must be a subtype of string indexer type '{1}':{NL}{2}": {
            "code": 2168,
            "category": 1 /* Error */
        },
        "All numerically named properties must be subtypes of numeric indexer type '{0}'.": {
            "code": 2169,
            "category": 1 /* Error */
        },
        "All numerically named properties must be subtypes of numeric indexer type '{0}':{NL}{1}": {
            "code": 2170,
            "category": 1 /* Error */
        },
        "All named properties must be subtypes of string indexer type '{0}'.": {
            "code": 2171,
            "category": 1 /* Error */
        },
        "All named properties must be subtypes of string indexer type '{0}':{NL}{1}": {
            "code": 2172,
            "category": 1 /* Error */
        },
        "Generic type references must include all type arguments.": {
            "code": 2173,
            "category": 1 /* Error */
        },
        "Default arguments are not allowed in an overload parameter.": {
            "code": 2174,
            "category": 1 /* Error */
        },
        "Overloads cannot differ only by return type.": {
            "code": 2175,
            "category": 1 /* Error */
        },
        "Function expression declared a non-void return type, but has no return expression.": {
            "code": 2176,
            "category": 1 /* Error */
        },
        "Import declaration referencing identifier from internal module can only be made with variables, functions, classes, interfaces, enums and internal modules.": {
            "code": 2177,
            "category": 1 /* Error */
        },
        "Could not find symbol '{0}' in module '{1}'.": {
            "code": 2178,
            "category": 1 /* Error */
        },
        "Unable to resolve module reference '{0}'.": {
            "code": 2179,
            "category": 1 /* Error */
        },
        "Could not find module '{0}' in module '{1}'.": {
            "code": 2180,
            "category": 1 /* Error */
        },
        "Type '{0}' is missing property '{1}' from type '{2}'.": {
            "code": 4000,
            "category": 3 /* NoPrefix */
        },
        "Types of property '{0}' of types '{1}' and '{2}' are incompatible.": {
            "code": 4001,
            "category": 3 /* NoPrefix */
        },
        "Types of property '{0}' of types '{1}' and '{2}' are incompatible:{NL}{3}": {
            "code": 4002,
            "category": 3 /* NoPrefix */
        },
        "Property '{0}' defined as private in type '{1}' is defined as public in type '{2}'.": {
            "code": 4003,
            "category": 3 /* NoPrefix */
        },
        "Property '{0}' defined as public in type '{1}' is defined as private in type '{2}'.": {
            "code": 4004,
            "category": 3 /* NoPrefix */
        },
        "Types '{0}' and '{1}' define property '{2}' as private.": {
            "code": 4005,
            "category": 3 /* NoPrefix */
        },
        "Call signatures of types '{0}' and '{1}' are incompatible.": {
            "code": 4006,
            "category": 3 /* NoPrefix */
        },
        "Call signatures of types '{0}' and '{1}' are incompatible:{NL}{2}": {
            "code": 4007,
            "category": 3 /* NoPrefix */
        },
        "Type '{0}' requires a call signature, but type '{1}' lacks one.": {
            "code": 4008,
            "category": 3 /* NoPrefix */
        },
        "Construct signatures of types '{0}' and '{1}' are incompatible.": {
            "code": 4009,
            "category": 3 /* NoPrefix */
        },
        "Construct signatures of types '{0}' and '{1}' are incompatible:{NL}{2}": {
            "code": 40010,
            "category": 3 /* NoPrefix */
        },
        "Type '{0}' requires a construct signature, but type '{1}' lacks one.": {
            "code": 4011,
            "category": 3 /* NoPrefix */
        },
        "Index signatures of types '{0}' and '{1}' are incompatible.": {
            "code": 4012,
            "category": 3 /* NoPrefix */
        },
        "Index signatures of types '{0}' and '{1}' are incompatible:{NL}{2}": {
            "code": 4013,
            "category": 3 /* NoPrefix */
        },
        "Call signature expects {0} or fewer parameters.": {
            "code": 4014,
            "category": 3 /* NoPrefix */
        },
        "Could not apply type'{0}' to argument {1} which is of type '{2}'.": {
            "code": 4015,
            "category": 3 /* NoPrefix */
        },
        "Class '{0}' defines instance member accessor '{1}', but extended class '{2}' defines it as instance member function.": {
            "code": 4016,
            "category": 3 /* NoPrefix */
        },
        "Class '{0}' defines instance member property '{1}', but extended class '{2}' defines it as instance member function.": {
            "code": 4017,
            "category": 3 /* NoPrefix */
        },
        "Class '{0}' defines instance member function '{1}', but extended class '{2}' defines it as instance member accessor.": {
            "code": 4018,
            "category": 3 /* NoPrefix */
        },
        "Class '{0}' defines instance member function '{1}', but extended class '{2}' defines it as instance member property.": {
            "code": 4019,
            "category": 3 /* NoPrefix */
        },
        "Types of static property '{0}' of class '{1}' and class '{2}' are incompatible.": {
            "code": 4020,
            "category": 3 /* NoPrefix */
        },
        "Types of static property '{0}' of class '{1}' and class '{2}' are incompatible:{NL}{3}": {
            "code": 4021,
            "category": 3 /* NoPrefix */
        },
        "Type reference cannot refer to container '{0}'.": {
            "code": 4022,
            "category": 1 /* Error */
        },
        "Type reference cannot must refer to type.": {
            "code": 4023,
            "category": 1 /* Error */
        },
        "Enums with multiple declarations must provide an initializer for the first enum element.": {
            "code": 4024,
            "category": 1 /* Error */
        },
        " (+ {0} overload(s))": {
            "code": 4025,
            "category": 2 /* Message */
        },
        "Current host does not support '{0}' option.": {
            "code": 5001,
            "category": 1 /* Error */
        },
        "ECMAScript target version '{0}' not supported.  Using default '{1}' code generation.": {
            "code": 5002,
            "category": 0 /* Warning */
        },
        "Module code generation '{0}' not supported.  Using default '{1}' code generation.": {
            "code": 5003,
            "category": 0 /* Warning */
        },
        "Could not find file: '{0}'.": {
            "code": 5004,
            "category": 1 /* Error */
        },
        "A file cannot have a reference to itself.": {
            "code": 5006,
            "category": 1 /* Error */
        },
        "Cannot resolve referenced file: '{0}'.": {
            "code": 5007,
            "category": 1 /* Error */
        },
        "Cannot find the common subdirectory path for the input files.": {
            "code": 5009,
            "category": 1 /* Error */
        },
        "Cannot compile dynamic modules when emitting into single file.": {
            "code": 5010,
            "category": 1 /* Error */
        },
        "Emit Error: {0}.": {
            "code": 5011,
            "category": 1 /* Error */
        },
        "Cannot read file '{0}': {1}": {
            "code": 5012,
            "category": 1 /* Error */
        },
        "Unsupported file encoding.": {
            "code": 5013,
            "category": 3 /* NoPrefix */
        },
        "Locale must be of the form <language> or <language>-<territory>. For example '{0}' or '{1}'.": {
            "code": 5014,
            "category": 1 /* Error */
        },
        "Unsupported locale: '{0}'.": {
            "code": 5015,
            "category": 1 /* Error */
        },
        "Execution Failed.{NL}": {
            "code": 5016,
            "category": 1 /* Error */
        },
        "Should not emit a type query": {
            "code": 5017,
            "category": 1 /* Error */
        },
        "Should not emit a type reference": {
            "code": 5018,
            "category": 1 /* Error */
        },
        "Invalid call to 'up'": {
            "code": 5019,
            "category": 1 /* Error */
        },
        "Invalid call to 'down'": {
            "code": 5020,
            "category": 1 /* Error */
        },
        "Base64 value '{0}' finished with a continuation bit": {
            "code": 5021,
            "category": 1 /* Error */
        },
        "Key was already in table": {
            "code": 5022,
            "category": 1 /* Error */
        },
        "Unknown option '{0}'": {
            "code": 5023,
            "category": 1 /* Error */
        },
        "Expected {0} arguments to message, got {1} instead": {
            "code": 5024,
            "category": 1 /* Error */
        },
        "Expected the message '{0}' to have {1} arguments, but it had {2}": {
            "code": 5025,
            "category": 1 /* Error */
        },
        "Invalid argument: {0}. {1}": {
            "code": 5026,
            "category": 1 /* Error */
        },
        "Invalid argument: {0}.": {
            "code": 5027,
            "category": 1 /* Error */
        },
        "Argument out of range: {0}.": {
            "code": 5028,
            "category": 1 /* Error */
        },
        "Argument null: {0}.": {
            "code": 5029,
            "category": 1 /* Error */
        },
        "Operation not implemented properly by subclass.": {
            "code": 5030,
            "category": 1 /* Error */
        },
        "Not yet implemented.": {
            "code": 5031,
            "category": 1 /* Error */
        },
        "Invalid operation: {0}": {
            "code": 5032,
            "category": 1 /* Error */
        },
        "Invalid operation.": {
            "code": 5033,
            "category": 1 /* Error */
        },
        "Couldn't delete file '{0}'": {
            "code": 5034,
            "category": 1 /* Error */
        },
        "Couldn't create directory '{0}'": {
            "code": 5035,
            "category": 1 /* Error */
        },
        "Error while executing file '{0}': ": {
            "code": 5036,
            "category": 1 /* Error */
        },
        "Concatenate and emit output to single file | Redirect output structure to the directory": {
            "code": 6001,
            "category": 2 /* Message */
        },
        "Generates corresponding {0} file": {
            "code": 6002,
            "category": 2 /* Message */
        },
        "Specifies the location where debugger should locate map files instead of generated locations.": {
            "code": 6003,
            "category": 2 /* Message */
        },
        "Specifies the location where debugger should locate TypeScript files instead of source locations.": {
            "code": 6004,
            "category": 2 /* Message */
        },
        "Watch input files": {
            "code": 6005,
            "category": 2 /* Message */
        },
        "Execute the script after compilation": {
            "code": 6006,
            "category": 2 /* Message */
        },
        "Minimize whitespace": {
            "code": 6007,
            "category": 2 /* Message */
        },
        "Propagate constants to emitted code": {
            "code": 6008,
            "category": 2 /* Message */
        },
        "Emit comments to output": {
            "code": 6009,
            "category": 2 /* Message */
        },
        "Skip resolution and preprocessing": {
            "code": 6010,
            "category": 2 /* Message */
        },
        "Print debug output": {
            "code": 6011,
            "category": 2 /* Message */
        },
        "Do not include a default {0} with global declarations": {
            "code": 6012,
            "category": 2 /* Message */
        },
        "Gather diagnostic info about the compilation process": {
            "code": 6013,
            "category": 2 /* Message */
        },
        "Typecheck each file as an update on the first": {
            "code": 6014,
            "category": 2 /* Message */
        },
        "Specify ECMAScript target version: \"{0}\" (default), or \"{1}\"": {
            "code": 6015,
            "category": 2 /* Message */
        },
        "Specify module code generation: \"{0}\" (default) or \"{1}\"": {
            "code": 6016,
            "category": 2 /* Message */
        },
        "Print this message": {
            "code": 6017,
            "category": 2 /* Message */
        },
        "Force file resolution to be case sensitive": {
            "code": 6018,
            "category": 2 /* Message */
        },
        "Print the compiler's version: {0}": {
            "code": 6019,
            "category": 2 /* Message */
        },
        "Allow use of deprecated \"{0}\" type": {
            "code": 6020,
            "category": 2 /* Message */
        },
        "Allow use of deprecated \"{0}\" keyword when referencing an external module": {
            "code": 6021,
            "category": 2 /* Message */
        },
        "Specify locale for errors and messages. For example '{0}' or '{1}'": {
            "code": 6022,
            "category": 2 /* Message */
        },
        "Syntax:   {0}": {
            "code": 6023,
            "category": 2 /* Message */
        },
        "options": {
            "code": 6024,
            "category": 2 /* Message */
        },
        "file": {
            "code": 6025,
            "category": 2 /* Message */
        },
        "Examples:": {
            "code": 6026,
            "category": 2 /* Message */
        },
        "Options:": {
            "code": 6027,
            "category": 2 /* Message */
        },
        "Insert command line options and files from a file.": {
            "code": 6030,
            "category": 2 /* Message */
        },
        "Version {0}": {
            "code": 6029,
            "category": 2 /* Message */
        },
        "Use the '{0}' flag to see options": {
            "code": 6031,
            "category": 2 /* Message */
        },
        "{NL}Recompiling ({0}):": {
            "code": 6032,
            "category": 2 /* Message */
        },
        "STRING": {
            "code": 6033,
            "category": 2 /* Message */
        },
        "KIND": {
            "code": 6034,
            "category": 2 /* Message */
        },
        "FILE|DIRECTORY": {
            "code": 6035,
            "category": 2 /* Message */
        },
        "VERSION": {
            "code": 6036,
            "category": 2 /* Message */
        },
        "This version of the Javascript runtime doesn't support the '{0}' function.": {
            "code": 7000,
            "category": 1 /* Error */
        },
        "Looking up path for identifier token did not result in an identifer.": {
            "code": 7001,
            "category": 1 /* Error */
        },
        "Unknown rule": {
            "code": 7002,
            "category": 1 /* Error */
        },
        "Invalid line number ({0})": {
            "code": 7003,
            "category": 1 /* Error */
        }
    };
})(TypeScript || (TypeScript = {}));
var JSON3;
(function (JSON3) {
    var getClass = {}.toString, isProperty, forEach, undef;

    var Escapes, toPaddedString, quote, serialize;
    var fromCharCode, Unescapes, abort, lex, get, walk, update, Index, Source;

    var isExtended = new Date(-3509827334573292), floor, Months, getDay;

    try  {
        isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() == 1 && isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
    } catch (exception) {
    }

    if (!isExtended) {
        floor = Math.floor;

        Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

        getDay = function (year, month) {
            return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
        };
    }

    if (!(isProperty = {}.hasOwnProperty)) {
        isProperty = function (property) {
            var members = {}, constructor;
            if ((members.__proto__ = null, members.__proto__ = {
                "toString": 1
            }, members).toString != getClass) {
                isProperty = function (property) {
                    var original = this.__proto__, result = property in (this.__proto__ = null, this);

                    this.__proto__ = original;
                    return result;
                };
            } else {
                constructor = members.constructor;

                isProperty = function (property) {
                    var parent = (this.constructor || constructor).prototype;
                    return property in this && !(property in parent && this[property] === parent[property]);
                };
            }
            members = null;
            return isProperty.call(this, property);
        };
    }

    forEach = function (object, callback) {
        var size = 0, Properties, members, property, forEach;

        (Properties = function () {
            this.valueOf = 0;
        }).prototype.valueOf = 0;

        members = new Properties();
        for (property in members) {
            if (isProperty.call(members, property)) {
                size++;
            }
        }
        Properties = members = null;

        if (!size) {
            members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];

            forEach = function (object, callback) {
                var isFunction = getClass.call(object) == "[object Function]", property, length;
                for (property in object) {
                    if (!(isFunction && property == "prototype") && isProperty.call(object, property)) {
                        callback(property);
                    }
                }

                for (length = members.length; property = members[--length]; isProperty.call(object, property) && callback(property))
                    ;
            };
        } else if (size == 2) {
            forEach = function (object, callback) {
                var members = {}, isFunction = getClass.call(object) == "[object Function]", property;
                for (property in object) {
                    if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
                        callback(property);
                    }
                }
            };
        } else {
            forEach = function (object, callback) {
                var isFunction = getClass.call(object) == "[object Function]", property, isConstructor;
                for (property in object) {
                    if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
                        callback(property);
                    }
                }

                if (isConstructor || isProperty.call(object, (property = "constructor"))) {
                    callback(property);
                }
            };
        }
        return forEach(object, callback);
    };

    Escapes = {
        "\\": "\\\\",
        '"': '\\"',
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t"
    };

    toPaddedString = function (width, value) {
        return ("000000" + (value || 0)).slice(-width);
    };

    quote = function (value) {
        var result = '"', index = 0, symbol;
        for (; symbol = value.charAt(index); index++) {
            result += '\\"\b\f\n\r\t'.indexOf(symbol) > -1 ? Escapes[symbol] : (Escapes[symbol] = symbol < " " ? "\\u00" + toPaddedString(2, symbol.charCodeAt(0).toString(16)) : symbol);
        }
        return result + '"';
    };

    serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
        var value = object[property], className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, any, result;
        if (typeof value == "object" && value) {
            className = getClass.call(value);
            if (className == "[object Date]" && !isProperty.call(value, "toJSON")) {
                if (value > -1 / 0 && value < 1 / 0) {
                    if (getDay) {
                        date = floor(value / 864e5);
                        for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++)
                            ;
                        for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++)
                            ;
                        date = 1 + date - getDay(year, month);

                        time = (value % 864e5 + 864e5) % 864e5;

                        hours = floor(time / 36e5) % 24;
                        minutes = floor(time / 6e4) % 60;
                        seconds = floor(time / 1e3) % 60;
                        milliseconds = time % 1e3;
                    } else {
                        year = value.getUTCFullYear();
                        month = value.getUTCMonth();
                        date = value.getUTCDate();
                        hours = value.getUTCHours();
                        minutes = value.getUTCMinutes();
                        seconds = value.getUTCSeconds();
                        milliseconds = value.getUTCMilliseconds();
                    }

                    value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) + "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) + "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) + "." + toPaddedString(3, milliseconds) + "Z";
                } else {
                    value = null;
                }
            } else if (typeof value.toJSON == "function" && ((className != "[object Number]" && className != "[object String]" && className != "[object Array]") || isProperty.call(value, "toJSON"))) {
                value = value.toJSON(property);
            }
        }
        if (callback) {
            value = callback.call(object, property, value);
        }
        if (value === null) {
            return "null";
        }
        className = getClass.call(value);
        if (className == "[object Boolean]") {
            return "" + value;
        } else if (className == "[object Number]") {
            return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
        } else if (className == "[object String]") {
            return quote(value);
        }

        if (typeof value == "object") {
            for (length = stack.length; length--; ) {
                if (stack[length] === value) {
                    throw TypeError();
                }
            }

            stack.push(value);
            results = [];

            prefix = indentation;
            indentation += whitespace;
            if (className == "[object Array]") {
                for (index = 0, length = value.length; index < length; any || (any = true), index++) {
                    element = serialize(index, value, callback, properties, whitespace, indentation, stack);
                    results.push(element === undef ? "null" : element);
                }
                result = any ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
            } else {
                forEach(properties || value, function (property) {
                    var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                    if (element !== undef) {
                        results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
                    }
                    any || (any = true);
                });
                result = any ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
            }

            stack.pop();
            return result;
        }
    };

    function stringify(source, filter, width) {
        var whitespace, callback, properties, index, length, value;
        if (typeof filter == "function" || typeof filter == "object" && filter) {
            if (getClass.call(filter) == "[object Function]") {
                callback = filter;
            } else if (getClass.call(filter) == "[object Array]") {
                properties = {};
                for (index = 0, length = filter.length; index < length; value = filter[index++], ((getClass.call(value) == "[object String]" || getClass.call(value) == "[object Number]") && (properties[value] = 1)))
                    ;
            }
        }
        if (width) {
            if (getClass.call(width) == "[object Number]") {
                if ((width -= width % 1) > 0) {
                    for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ")
                        ;
                }
            } else if (getClass.call(width) == "[object String]") {
                whitespace = width.length <= 10 ? width : width.slice(0, 10);
            }
        }

        return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
    }
    JSON3.stringify = stringify;
    ;

    fromCharCode = String.fromCharCode;

    Unescapes = {
        "\\": "\\",
        '"': '"',
        "/": "/",
        "b": "\b",
        "t": "\t",
        "n": "\n",
        "f": "\f",
        "r": "\r"
    };

    abort = function () {
        Index = Source = null;
        throw SyntaxError();
    };

    lex = function () {
        var source = Source, length = source.length, symbol, value, begin, position, sign;
        while (Index < length) {
            symbol = source.charAt(Index);
            if ("\t\r\n ".indexOf(symbol) > -1) {
                Index++;
            } else if ("{}[]:,".indexOf(symbol) > -1) {
                Index++;
                return symbol;
            } else if (symbol == '"') {
                for (value = "@", Index++; Index < length; ) {
                    symbol = source.charAt(Index);
                    if (symbol < " ") {
                        abort();
                    } else if (symbol == "\\") {
                        symbol = source.charAt(++Index);
                        if ('\\"/btnfr'.indexOf(symbol) > -1) {
                            value += Unescapes[symbol];
                            Index++;
                        } else if (symbol == "u") {
                            begin = ++Index;

                            for (position = Index + 4; Index < position; Index++) {
                                symbol = source.charAt(Index);

                                if (!(symbol >= "0" && symbol <= "9" || symbol >= "a" && symbol <= "f" || symbol >= "A" && symbol <= "F")) {
                                    abort();
                                }
                            }

                            value += fromCharCode("0x" + source.slice(begin, Index));
                        } else {
                            abort();
                        }
                    } else {
                        if (symbol == '"') {
                            break;
                        }

                        value += symbol;
                        Index++;
                    }
                }
                if (source.charAt(Index) == '"') {
                    Index++;

                    return value;
                }

                abort();
            } else {
                begin = Index;

                if (symbol == "-") {
                    sign = true;
                    symbol = source.charAt(++Index);
                }

                if (symbol >= "0" && symbol <= "9") {
                    if (symbol == "0" && (symbol = source.charAt(Index + 1), symbol >= "0" && symbol <= "9")) {
                        abort();
                    }
                    sign = false;

                    for (; Index < length && (symbol = source.charAt(Index), symbol >= "0" && symbol <= "9"); Index++)
                        ;

                    if (source.charAt(Index) == ".") {
                        position = ++Index;

                        for (; position < length && (symbol = source.charAt(position), symbol >= "0" && symbol <= "9"); position++)
                            ;
                        if (position == Index) {
                            abort();
                        }
                        Index = position;
                    }

                    symbol = source.charAt(Index);
                    if (symbol == "e" || symbol == "E") {
                        symbol = source.charAt(++Index);
                        if (symbol == "+" || symbol == "-") {
                            Index++;
                        }

                        for (position = Index; position < length && (symbol = source.charAt(position), symbol >= "0" && symbol <= "9"); position++)
                            ;
                        if (position == Index) {
                            abort();
                        }
                        Index = position;
                    }

                    return +source.slice(begin, Index);
                }

                if (sign) {
                    abort();
                }

                if (source.slice(Index, Index + 4) == "true") {
                    Index += 4;
                    return true;
                } else if (source.slice(Index, Index + 5) == "false") {
                    Index += 5;
                    return false;
                } else if (source.slice(Index, Index + 4) == "null") {
                    Index += 4;
                    return null;
                }

                abort();
            }
        }

        return "$";
    };

    get = function (value) {
        var results, any, key;
        if (value == "$") {
            abort();
        }
        if (typeof value == "string") {
            if (value.charAt(0) == "@") {
                return value.slice(1);
            }

            if (value == "[") {
                results = [];
                for (; ; any || (any = true)) {
                    value = lex();

                    if (value == "]") {
                        break;
                    }

                    if (any) {
                        if (value == ",") {
                            value = lex();
                            if (value == "]") {
                                abort();
                            }
                        } else {
                            abort();
                        }
                    }

                    if (value == ",") {
                        abort();
                    }
                    results.push(get(value));
                }
                return results;
            } else if (value == "{") {
                results = {};
                for (; ; any || (any = true)) {
                    value = lex();

                    if (value == "}") {
                        break;
                    }

                    if (any) {
                        if (value == ",") {
                            value = lex();
                            if (value == "}") {
                                abort();
                            }
                        } else {
                            abort();
                        }
                    }

                    if (value == "," || typeof value != "string" || value.charAt(0) != "@" || lex() != ":") {
                        abort();
                    }
                    results[value.slice(1)] = get(lex());
                }
                return results;
            }

            abort();
        }
        return value;
    };

    update = function (source, property, callback) {
        var element = walk(source, property, callback);
        if (element === undef) {
            delete source[property];
        } else {
            source[property] = element;
        }
    };

    walk = function (source, property, callback) {
        var value = source[property], length;
        if (typeof value == "object" && value) {
            if (getClass.call(value) == "[object Array]") {
                for (length = value.length; length--; ) {
                    update(value, length, callback);
                }
            } else {
                forEach(value, function (property) {
                    update(value, property, callback);
                });
            }
        }
        return callback.call(source, property, value);
    };

    function parse(source, callback) {
        if (typeof callback === "undefined") { callback = undefined; }
        var result, value;
        Index = 0;
        Source = source;
        result = get(lex());

        if (lex() != "$") {
            abort();
        }

        Index = Source = null;
        return callback && getClass.call(callback) == "[object Function]" ? walk((value = {}, value[""] = result, value), "", callback) : result;
    }
    JSON3.parse = parse;
    ;

    if (typeof JSON === "undefined") {
        JSON = JSON3;
    }
})(JSON3 || (JSON3 = {}));
var TypeScript;
(function (TypeScript) {
    var ArrayUtilities = (function () {
        function ArrayUtilities() {
        }
        ArrayUtilities.isArray = function (value) {
            return Object.prototype.toString.apply(value, []) === '[object Array]';
        };

        ArrayUtilities.sequenceEquals = function (array1, array2, equals) {
            if (array1 === array2) {
                return true;
            }

            if (array1 === null || array2 === null) {
                return false;
            }

            if (array1.length !== array2.length) {
                return false;
            }

            for (var i = 0, n = array1.length; i < n; i++) {
                if (!equals(array1[i], array2[i])) {
                    return false;
                }
            }

            return true;
        };

        ArrayUtilities.contains = function (array, value) {
            for (var i = 0; i < array.length; i++) {
                if (array[i] === value) {
                    return true;
                }
            }

            return false;
        };

        ArrayUtilities.groupBy = function (array, func) {
            var result = {};

            for (var i = 0, n = array.length; i < n; i++) {
                var v = array[i];
                var k = func(v);

                var list = result[k] || [];
                list.push(v);
                result[k] = list;
            }

            return result;
        };

        ArrayUtilities.min = function (array, func) {
            var min = func(array[0]);

            for (var i = 1; i < array.length; i++) {
                var next = func(array[i]);
                if (next < min) {
                    min = next;
                }
            }

            return min;
        };

        ArrayUtilities.max = function (array, func) {
            var max = func(array[0]);

            for (var i = 1; i < array.length; i++) {
                var next = func(array[i]);
                if (next > max) {
                    max = next;
                }
            }

            return max;
        };

        ArrayUtilities.last = function (array) {
            if (array.length === 0) {
                throw TypeScript.Errors.argumentOutOfRange('array');
            }

            return array[array.length - 1];
        };

        ArrayUtilities.firstOrDefault = function (array, func) {
            for (var i = 0, n = array.length; i < n; i++) {
                var value = array[i];
                if (func(value)) {
                    return value;
                }
            }

            return null;
        };

        ArrayUtilities.sum = function (array, func) {
            var result = 0;

            for (var i = 0, n = array.length; i < n; i++) {
                result += func(array[i]);
            }

            return result;
        };

        ArrayUtilities.whereNotNull = function (array) {
            var result = [];
            for (var i = 0; i < array.length; i++) {
                var value = array[i];
                if (value !== null) {
                    result.push(value);
                }
            }

            return result;
        };

        ArrayUtilities.select = function (values, func) {
            var result = new Array(values.length);

            for (var i = 0; i < values.length; i++) {
                result[i] = func(values[i]);
            }

            return result;
        };

        ArrayUtilities.where = function (values, func) {
            var result = new Array();

            for (var i = 0; i < values.length; i++) {
                if (func(values[i])) {
                    result.push(values[i]);
                }
            }

            return result;
        };

        ArrayUtilities.any = function (array, func) {
            for (var i = 0, n = array.length; i < n; i++) {
                if (func(array[i])) {
                    return true;
                }
            }

            return false;
        };

        ArrayUtilities.all = function (array, func) {
            for (var i = 0, n = array.length; i < n; i++) {
                if (!func(array[i])) {
                    return false;
                }
            }

            return true;
        };

        ArrayUtilities.binarySearch = function (array, value) {
            var low = 0;
            var high = array.length - 1;

            while (low <= high) {
                var middle = low + ((high - low) >> 1);
                var midValue = array[middle];

                if (midValue === value) {
                    return middle;
                } else if (midValue > value) {
                    high = middle - 1;
                } else {
                    low = middle + 1;
                }
            }

            return ~low;
        };

        ArrayUtilities.createArray = function (length, defaultValue) {
            var result = new Array(length);
            for (var i = 0; i < length; i++) {
                result[i] = defaultValue;
            }

            return result;
        };

        ArrayUtilities.grow = function (array, length, defaultValue) {
            var count = length - array.length;
            for (var i = 0; i < count; i++) {
                array.push(defaultValue);
            }
        };

        ArrayUtilities.copy = function (sourceArray, sourceIndex, destinationArray, destinationIndex, length) {
            for (var i = 0; i < length; i++) {
                destinationArray[destinationIndex + i] = sourceArray[sourceIndex + i];
            }
        };
        return ArrayUtilities;
    })();
    TypeScript.ArrayUtilities = ArrayUtilities;
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function (TypeScript) {
    (function (Constants) {
        Constants[Constants["Max31BitInteger"] = 1073741823] = "Max31BitInteger";
        Constants[Constants["Min31BitInteger"] = -1073741824] = "Min31BitInteger";
    })(TypeScript.Constants || (TypeScript.Constants = {}));
    var Constants = TypeScript.Constants;
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function (TypeScript) {
    var Debug = (function () {
        function Debug() {
        }
        Debug.assert = function (expression, message) {
            if (!expression) {
                throw new Error("Debug Failure. False expression: " + (message ? message : ""));
            }
        };
        return Debug;
    })();
    TypeScript.Debug = Debug;
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function (TypeScript) {
    var Errors = (function () {
        function Errors() {
        }
        Errors.argument = function (argument, message) {
            return new Error(message ? TypeScript.getDiagnosticMessage(TypeScript.DiagnosticCode.Invalid_argument_0_1, [argument, message]) : TypeScript.getDiagnosticMessage(TypeScript.DiagnosticCode.Invalid_argument_0, [argument]));
        };

        Errors.argumentOutOfRange = function (argument) {
            return new Error(TypeScript.getDiagnosticMessage(TypeScript.DiagnosticCode.Argument_out_of_range_0, [argument]));
        };

        Errors.argumentNull = function (argument) {
            return new Error(TypeScript.getDiagnosticMessage(TypeScript.DiagnosticCode.Argument_null_0, [argument]));
        };

        Errors.abstract = function () {
            return new Error(TypeScript.getDiagnosticMessage(TypeScript.DiagnosticCode.Operation_not_implemented_properly_by_subclass, null));
        };

        Errors.notYetImplemented = function () {
            return new Error(TypeScript.getDiagnosticMessage(TypeScript.DiagnosticCode.Not_yet_implemented, null));
        };

        Errors.invalidOperation = function (message) {
            return new Error(message ? TypeScript.getDiagnosticMessage(TypeScript.DiagnosticCode.Invalid_operation_0, [message]) : TypeScript.getDiagnosticMessage(TypeScript.DiagnosticCode.Invalid_operation, null));
        };
        return Errors;
    })();
    TypeScript.Errors = Errors;
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function (TypeScript) {
    var Hash = (function () {
        function Hash() {
        }
        Hash.computeFnv1aCharArrayHashCode = function (text, start, len) {
            var hashCode = Hash.FNV_BASE;
            var end = start + len;

            for (var i = start; i < end; i++) {
                hashCode = TypeScript.IntegerUtilities.integerMultiplyLow32Bits(hashCode ^ text[i], Hash.FNV_PRIME);
            }

            return hashCode;
        };

        Hash.computeSimple31BitCharArrayHashCode = function (key, start, len) {
            var hash = 0;

            for (var i = 0; i < len; i++) {
                var ch = key[start + i];

                hash = ((((hash << 5) - hash) | 0) + ch) | 0;
            }

            return hash & 0x7FFFFFFF;
        };

        Hash.computeSimple31BitStringHashCode = function (key) {
            var hash = 0;

            var start = 0;
            var len = key.length;

            for (var i = 0; i < len; i++) {
                var ch = key.charCodeAt(start + i);

                hash = ((((hash << 5) - hash) | 0) + ch) | 0;
            }

            return hash & 0x7FFFFFFF;
        };

        Hash.computeMurmur2StringHashCode = function (key, seed) {
            var m = 0x5bd1e995;
            var r = 24;

            var numberOfCharsLeft = key.length;
            var h = Math.abs(seed ^ numberOfCharsLeft);

            var index = 0;
            while (numberOfCharsLeft >= 2) {
                var c1 = key.charCodeAt(index);
                var c2 = key.charCodeAt(index + 1);

                var k = Math.abs(c1 | (c2 << 16));

                k = TypeScript.IntegerUtilities.integerMultiplyLow32Bits(k, m);
                k ^= k >> r;
                k = TypeScript.IntegerUtilities.integerMultiplyLow32Bits(k, m);

                h = TypeScript.IntegerUtilities.integerMultiplyLow32Bits(h, m);
                h ^= k;

                index += 2;
                numberOfCharsLeft -= 2;
            }

            if (numberOfCharsLeft == 1) {
                h ^= key.charCodeAt(index);
                h = TypeScript.IntegerUtilities.integerMultiplyLow32Bits(h, m);
            }

            h ^= h >> 13;
            h = TypeScript.IntegerUtilities.integerMultiplyLow32Bits(h, m);
            h ^= h >> 15;

            return h;
        };

        Hash.getPrime = function (min) {
            for (var i = 0; i < Hash.primes.length; i++) {
                var num = Hash.primes[i];
                if (num >= min) {
                    return num;
                }
            }

            throw TypeScript.Errors.notYetImplemented();
        };

        Hash.expandPrime = function (oldSize) {
            var num = oldSize << 1;
            if (num > 2146435069 && 2146435069 > oldSize) {
                return 2146435069;
            }
            return Hash.getPrime(num);
        };

        Hash.combine = function (value, currentHash) {
            return (((currentHash << 5) + currentHash) + value) & 0x7FFFFFFF;
        };
        Hash.FNV_BASE = 2166136261;
        Hash.FNV_PRIME = 16777619;

        Hash.primes = [
            3,
            7,
            11,
            17,
            23,
            29,
            37,
            47,
            59,
            71,
            89,
            107,
            131,
            163,
            197,
            239,
            293,
            353,
            431,
            521,
            631,
            761,
            919,
            1103,
            1327,
            1597,
            1931,
            2333,
            2801,
            3371,
            4049,
            4861,
            5839,
            7013,
            8419,
            10103,
            12143,
            14591,
            17519,
            21023,
            25229,
            30293,
            36353,
            43627,
            52361,
            62851,
            75431,
            90523,
            108631,
            130363,
            156437,
            187751,
            225307,
            270371,
            324449,
            389357,
            467237,
            560689,
            672827,
            807403,
            968897,
            1162687,
            1395263,
            1674319,
            2009191,
            2411033,
            2893249,
            3471899,
            4166287,
            4999559,
            5999471,
            7199369
        ];
        return Hash;
    })();
    TypeScript.Hash = Hash;
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function (TypeScript) {
    (function (Collections) {
        Collections.DefaultHashTableCapacity = 256;

        var HashTableEntry = (function () {
            function HashTableEntry(Key, Value, HashCode, Next) {
                this.Key = Key;
                this.Value = Value;
                this.HashCode = HashCode;
                this.Next = Next;
            }
            return HashTableEntry;
        })();

        var HashTable = (function () {
            function HashTable(capacity, hash) {
                this.hash = hash;
                this.count = 0;
                var size = TypeScript.Hash.getPrime(capacity);
                this.entries = TypeScript.ArrayUtilities.createArray(size, null);
            }
            HashTable.prototype.set = function (key, value) {
                this.addOrSet(key, value, false);
            };

            HashTable.prototype.add = function (key, value) {
                this.addOrSet(key, value, true);
            };

            HashTable.prototype.containsKey = function (key) {
                var hashCode = this.computeHashCode(key);
                var entry = this.findEntry(key, hashCode);
                return entry !== null;
            };

            HashTable.prototype.get = function (key) {
                var hashCode = this.computeHashCode(key);
                var entry = this.findEntry(key, hashCode);

                return entry === null ? null : entry.Value;
            };

            HashTable.prototype.computeHashCode = function (key) {
                var hashCode = this.hash === null ? (key).hashCode() : this.hash(key);

                hashCode = hashCode & 0x7FFFFFFF;
                TypeScript.Debug.assert(hashCode >= 0);

                return hashCode;
            };

            HashTable.prototype.addOrSet = function (key, value, throwOnExistingEntry) {
                var hashCode = this.computeHashCode(key);

                var entry = this.findEntry(key, hashCode);
                if (entry !== null) {
                    if (throwOnExistingEntry) {
                        throw TypeScript.Errors.argument('key', TypeScript.getLocalizedText(TypeScript.DiagnosticCode.Key_was_already_in_table, null));
                    }

                    entry.Key = key;
                    entry.Value = value;
                    return;
                }

                return this.addEntry(key, value, hashCode);
            };

            HashTable.prototype.findEntry = function (key, hashCode) {
                for (var e = this.entries[hashCode % this.entries.length]; e !== null; e = e.Next) {
                    if (e.HashCode === hashCode && key === e.Key) {
                        return e;
                    }
                }

                return null;
            };

            HashTable.prototype.addEntry = function (key, value, hashCode) {
                var index = hashCode % this.entries.length;

                var e = new HashTableEntry(key, value, hashCode, this.entries[index]);

                this.entries[index] = e;

                if (this.count >= (this.entries.length / 2)) {
                    this.grow();
                }

                this.count++;
                return e.Key;
            };

            HashTable.prototype.grow = function () {
                var newSize = TypeScript.Hash.expandPrime(this.entries.length);

                var oldEntries = this.entries;
                var newEntries = TypeScript.ArrayUtilities.createArray(newSize, null);

                this.entries = newEntries;

                for (var i = 0; i < oldEntries.length; i++) {
                    var e = oldEntries[i];

                    while (e !== null) {
                        var newIndex = e.HashCode % newSize;
                        var tmp = e.Next;
                        e.Next = newEntries[newIndex];
                        newEntries[newIndex] = e;
                        e = tmp;
                    }
                }
            };
            return HashTable;
        })();
        Collections.HashTable = HashTable;

        function createHashTable(capacity, hash) {
            if (typeof capacity === "undefined") { capacity = Collections.DefaultHashTableCapacity; }
            if (typeof hash === "undefined") { hash = null; }
            return new HashTable(capacity, hash);
        }
        Collections.createHashTable = createHashTable;

        var currentHashCode = 1;
        function identityHashCode(value) {
            if (value.__hash === undefined) {
                value.__hash = currentHashCode;
                currentHashCode++;
            }

            return value.__hash;
        }
        Collections.identityHashCode = identityHashCode;
    })(TypeScript.Collections || (TypeScript.Collections = {}));
    var Collections = TypeScript.Collections;
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function (TypeScript) {
    TypeScript.LocalizedDiagnosticMessages = null;

    function newLine() {
        return Environment ? Environment.newLine : "\r\n";
    }
    TypeScript.newLine = newLine;

    var Diagnostic = (function () {
        function Diagnostic(fileName, start, length, diagnosticKey, arguments) {
            if (typeof arguments === "undefined") { arguments = null; }
            this._diagnosticKey = diagnosticKey;
            this._arguments = (arguments && arguments.length > 0) ? arguments : null;
            this._fileName = fileName;
            this._start = start;
            this._length = length;
        }
        Diagnostic.prototype.toJSON = function (key) {
            var result = {};
            result.start = this.start();
            result.length = this.length();

            result.diagnosticCode = this._diagnosticKey;

            var arguments = (this).arguments();
            if (arguments && arguments.length > 0) {
                result.arguments = arguments;
            }

            return result;
        };

        Diagnostic.prototype.fileName = function () {
            return this._fileName;
        };

        Diagnostic.prototype.start = function () {
            return this._start;
        };

        Diagnostic.prototype.length = function () {
            return this._length;
        };

        Diagnostic.prototype.diagnosticKey = function () {
            return this._diagnosticKey;
        };

        Diagnostic.prototype.arguments = function () {
            return this._arguments;
        };

        Diagnostic.prototype.text = function () {
            return TypeScript.getLocalizedText(this._diagnosticKey, this._arguments);
        };

        Diagnostic.prototype.message = function () {
            return TypeScript.getDiagnosticMessage(this._diagnosticKey, this._arguments);
        };

        Diagnostic.prototype.additionalLocations = function () {
            return [];
        };

        Diagnostic.equals = function (diagnostic1, diagnostic2) {
            return diagnostic1._fileName === diagnostic2._fileName && diagnostic1._start === diagnostic2._start && diagnostic1._length === diagnostic2._length && diagnostic1._diagnosticKey === diagnostic2._diagnosticKey && TypeScript.ArrayUtilities.sequenceEquals(diagnostic1._arguments, diagnostic2._arguments, function (v1, v2) {
                return v1 === v2;
            });
        };
        return Diagnostic;
    })();
    TypeScript.Diagnostic = Diagnostic;

    function getLargestIndex(diagnostic) {
        var largest = -1;
        var regex = /\{(\d+)\}/g;

        var match;
        while ((match = regex.exec(diagnostic)) != null) {
            var val = parseInt(match[1]);
            if (!isNaN(val) && val > largest) {
                largest = val;
            }
        }

        return largest;
    }

    function getDiagnosticInfoFromKey(diagnosticKey) {
        var result = TypeScript.diagnosticInformationMap[diagnosticKey];
        TypeScript.Debug.assert(result !== undefined && result !== null);
        return result;
    }
    TypeScript.getDiagnosticInfoFromKey = getDiagnosticInfoFromKey;

    function getLocalizedText(diagnosticKey, args) {
        if (TypeScript.LocalizedDiagnosticMessages) {
            TypeScript.Debug.assert(TypeScript.LocalizedDiagnosticMessages.hasOwnProperty(diagnosticKey));
        }

        var diagnosticMessageText = TypeScript.LocalizedDiagnosticMessages ? TypeScript.LocalizedDiagnosticMessages[diagnosticKey] : diagnosticKey;
        TypeScript.Debug.assert(diagnosticMessageText !== undefined && diagnosticMessageText !== null);

        var actualCount = args ? args.length : 0;

        var expectedCount = 1 + getLargestIndex(diagnosticKey);

        if (expectedCount !== actualCount) {
            throw new Error(getLocalizedText(TypeScript.DiagnosticCode.Expected_0_arguments_to_message_got_1_instead, [expectedCount, actualCount]));
        }

        var valueCount = 1 + getLargestIndex(diagnosticMessageText);
        if (valueCount !== expectedCount) {
            throw new Error(getLocalizedText(TypeScript.DiagnosticCode.Expected_the_message_0_to_have_1_arguments_but_it_had_2, [diagnosticMessageText, expectedCount, valueCount]));
        }

        diagnosticMessageText = diagnosticMessageText.replace(/{(\d+)}/g, function (match, num) {
            return typeof args[num] !== 'undefined' ? args[num] : match;
        });

        diagnosticMessageText = diagnosticMessageText.replace(/{(NL)}/g, function (match) {
            return TypeScript.newLine();
        });

        return diagnosticMessageText;
    }
    TypeScript.getLocalizedText = getLocalizedText;

    function getDiagnosticMessage(diagnosticKey, args) {
        var diagnostic = getDiagnosticInfoFromKey(diagnosticKey);
        var diagnosticMessageText = getLocalizedText(diagnosticKey, args);

        var message;
        if (diagnostic.category === 1 /* Error */) {
            message = getLocalizedText(TypeScript.DiagnosticCode.error_TS_0_1, [diagnostic.code, diagnosticMessageText]);
        } else if (diagnostic.category === 0 /* Warning */) {
            message = getLocalizedText(TypeScript.DiagnosticCode.warning_TS_0_1, [diagnostic.code, diagnosticMessageText]);
        } else {
            message = diagnosticMessageText;
        }

        return message;
    }
    TypeScript.getDiagnosticMessage = getDiagnosticMessage;
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function (TypeScript) {
    TypeScript.nodeMakeDirectoryTime = 0;
    TypeScript.nodeCreateBufferTime = 0;
    TypeScript.nodeWriteFileSyncTime = 0;
})(TypeScript || (TypeScript = {}));

var ByteOrderMark;
(function (ByteOrderMark) {
    ByteOrderMark[ByteOrderMark["None"] = 0] = "None";
    ByteOrderMark[ByteOrderMark["Utf8"] = 1] = "Utf8";
    ByteOrderMark[ByteOrderMark["Utf16BigEndian"] = 2] = "Utf16BigEndian";
    ByteOrderMark[ByteOrderMark["Utf16LittleEndian"] = 3] = "Utf16LittleEndian";
})(ByteOrderMark || (ByteOrderMark = {}));

var FileInformation = (function () {
    function FileInformation(contents, byteOrderMark) {
        this.contents = contents;
        this.byteOrderMark = byteOrderMark;
    }
    return FileInformation;
})();

var Environment = (function () {
    function getWindowsScriptHostEnvironment() {
        try  {
            var fso = new ActiveXObject("Scripting.FileSystemObject");
        } catch (e) {
            return null;
        }

        var streamObjectPool = [];

        function getStreamObject() {
            if (streamObjectPool.length > 0) {
                return streamObjectPool.pop();
            } else {
                return new ActiveXObject("ADODB.Stream");
            }
        }

        function releaseStreamObject(obj) {
            streamObjectPool.push(obj);
        }

        var args = [];
        for (var i = 0; i < WScript.Arguments.length; i++) {
            args[i] = WScript.Arguments.Item(i);
        }

        return {
            newLine: "\r\n",
            currentDirectory: function () {
                return (WScript).CreateObject("WScript.Shell").CurrentDirectory;
            },
            readFile: function (path) {
                try  {
                    var streamObj = getStreamObject();
                    streamObj.Open();
                    streamObj.Type = 2;

                    streamObj.Charset = 'x-ansi';

                    streamObj.LoadFromFile(path);
                    var bomChar = streamObj.ReadText(2);

                    streamObj.Position = 0;

                    var byteOrderMark = 0 /* None */;

                    if (bomChar.charCodeAt(0) === 0xFE && bomChar.charCodeAt(1) === 0xFF) {
                        streamObj.Charset = 'unicode';
                        byteOrderMark = 2 /* Utf16BigEndian */;
                    } else if (bomChar.charCodeAt(0) === 0xFF && bomChar.charCodeAt(1) === 0xFE) {
                        streamObj.Charset = 'unicode';
                        byteOrderMark = 3 /* Utf16LittleEndian */;
                    } else if (bomChar.charCodeAt(0) === 0xEF && bomChar.charCodeAt(1) === 0xBB) {
                        streamObj.Charset = 'utf-8';
                        byteOrderMark = 1 /* Utf8 */;
                    } else {
                        streamObj.Charset = 'utf-8';
                    }

                    var contents = streamObj.ReadText(-1);
                    streamObj.Close();
                    releaseStreamObject(streamObj);
                    return new FileInformation(contents, byteOrderMark);
                } catch (err) {
                    var message;
                    if (err.number === -2147024809) {
                        message = TypeScript.getDiagnosticMessage(TypeScript.DiagnosticCode.Unsupported_file_encoding, null);
                    } else {
                        message = TypeScript.getDiagnosticMessage(TypeScript.DiagnosticCode.Cannot_read_file_0_1, [path, err.message]);
                    }

                    throw new Error(message);
                }
            },
            writeFile: function (path, contents, writeByteOrderMark) {
                var textStream = getStreamObject();
                textStream.Charset = 'utf-8';
                textStream.Open();
                textStream.WriteText(contents, 0);

                if (!writeByteOrderMark) {
                    textStream.Position = 3;
                } else {
                    textStream.Position = 0;
                }

                var fileStream = getStreamObject();
                fileStream.Type = 1;
                fileStream.Open();

                textStream.CopyTo(fileStream);

                fileStream.Flush();
                fileStream.SaveToFile(path, 2);
                fileStream.Close();

                textStream.Flush();
                textStream.Close();
            },
            fileExists: function (path) {
                return fso.FileExists(path);
            },
            deleteFile: function (path) {
                if (fso.FileExists(path)) {
                    fso.DeleteFile(path, true);
                }
            },
            directoryExists: function (path) {
                return fso.FolderExists(path);
            },
            listFiles: function (path, spec, options) {
                options = options || {};
                function filesInFolder(folder, root) {
                    var paths = [];
                    var fc;

                    if (options.recursive) {
                        fc = new Enumerator(folder.subfolders);

                        for (; !fc.atEnd(); fc.moveNext()) {
                            paths = paths.concat(filesInFolder(fc.item(), root + "\\" + fc.item().Name));
                        }
                    }

                    fc = new Enumerator(folder.files);

                    for (; !fc.atEnd(); fc.moveNext()) {
                        if (!spec || fc.item().Name.match(spec)) {
                            paths.push(root + "\\" + fc.item().Name);
                        }
                    }

                    return paths;
                }

                var folder = fso.GetFolder(path);
                var paths = [];

                return filesInFolder(folder, path);
            },
            arguments: args,
            standardOut: WScript.StdOut
        };
    }
    ;

    function getNodeEnvironment() {
        var _fs = require('fs');
        var _path = require('path');
        var _module = require('module');
        var _os = require('os');

        return {
            newLine: _os.EOL,
            currentDirectory: function () {
                return (process).cwd();
            },
            readFile: function (file) {
                var buffer = _fs.readFileSync(file);
                switch (buffer[0]) {
                    case 0xFE:
                        if (buffer[1] === 0xFF) {
                            var i = 0;
                            while ((i + 1) < buffer.length) {
                                var temp = buffer[i];
                                buffer[i] = buffer[i + 1];
                                buffer[i + 1] = temp;
                                i += 2;
                            }
                            return new FileInformation(buffer.toString("ucs2", 2), 2 /* Utf16BigEndian */);
                        }
                        break;
                    case 0xFF:
                        if (buffer[1] === 0xFE) {
                            return new FileInformation(buffer.toString("ucs2", 2), 3 /* Utf16LittleEndian */);
                        }
                        break;
                    case 0xEF:
                        if (buffer[1] === 0xBB) {
                            return new FileInformation(buffer.toString("utf8", 3), 1 /* Utf8 */);
                        }
                }

                return new FileInformation(buffer.toString("utf8", 0), 0 /* None */);
            },
            writeFile: function (path, contents, writeByteOrderMark) {
                function mkdirRecursiveSync(path) {
                    var stats = _fs.statSync(path);
                    if (stats.isFile()) {
                        throw "\"" + path + "\" exists but isn't a directory.";
                    } else if (stats.isDirectory()) {
                        return;
                    } else {
                        mkdirRecursiveSync(_path.dirname(path));
                        _fs.mkdirSync(path, 0775);
                    }
                }
                var start = new Date().getTime();
                mkdirRecursiveSync(_path.dirname(path));
                TypeScript.nodeMakeDirectoryTime += new Date().getTime() - start;

                if (writeByteOrderMark) {
                    contents = '\uFEFF' + contents;
                }

                var start = new Date().getTime();

                var chunkLength = 4 * 1024;
                var fileDescriptor = _fs.openSync(path, "w");
                try  {
                    for (var index = 0; index < contents.length; index += chunkLength) {
                        var bufferStart = new Date().getTime();
                        var buffer = new Buffer(contents.substr(index, chunkLength), "utf8");
                        TypeScript.nodeCreateBufferTime += new Date().getTime() - bufferStart;

                        _fs.writeSync(fileDescriptor, buffer, 0, buffer.length, null);
                    }
                } finally {
                    _fs.closeSync(fileDescriptor);
                }

                TypeScript.nodeWriteFileSyncTime += new Date().getTime() - start;
            },
            fileExists: function (path) {
                return _fs.existsSync(path);
            },
            deleteFile: function (path) {
                try  {
                    _fs.unlinkSync(path);
                } catch (e) {
                }
            },
            directoryExists: function (path) {
                return _fs.existsSync(path) && _fs.statSync(path).isDirectory();
            },
            listFiles: function dir(path, spec, options) {
                options = options || {};

                function filesInFolder(folder) {
                    var paths = [];

                    var files = _fs.readdirSync(folder);
                    for (var i = 0; i < files.length; i++) {
                        var stat = _fs.statSync(folder + "\\" + files[i]);
                        if (options.recursive && stat.isDirectory()) {
                            paths = paths.concat(filesInFolder(folder + "\\" + files[i]));
                        } else if (stat.isFile() && (!spec || files[i].match(spec))) {
                            paths.push(folder + "\\" + files[i]);
                        }
                    }

                    return paths;
                }

                return filesInFolder(path);
            },
            arguments: process.argv.slice(2),
            standardOut: {
                Write: function (str) {
                    process.stdout.write(str);
                },
                WriteLine: function (str) {
                    process.stdout.write(str + '\n');
                },
                Close: function () {
                }
            }
        };
    }
    ;

    if (typeof WScript !== "undefined" && typeof ActiveXObject === "function") {
        return getWindowsScriptHostEnvironment();
    } else if (typeof module !== 'undefined' && module.exports) {
        return getNodeEnvironment();
    } else {
        return null;
    }
})();
var TypeScript;
(function (TypeScript) {
    var IntegerUtilities = (function () {
        function IntegerUtilities() {
        }
        IntegerUtilities.integerDivide = function (numerator, denominator) {
            return (numerator / denominator) >> 0;
        };

        IntegerUtilities.integerMultiplyLow32Bits = function (n1, n2) {
            var n1Low16 = n1 & 0x0000ffff;
            var n1High16 = n1 >>> 16;

            var n2Low16 = n2 & 0x0000ffff;
            var n2High16 = n2 >>> 16;

            var resultLow32 = (((n1 & 0xffff0000) * n2) >>> 0) + (((n1 & 0x0000ffff) * n2) >>> 0) >>> 0;
            return resultLow32;
        };

        IntegerUtilities.integerMultiplyHigh32Bits = function (n1, n2) {
            var n1Low16 = n1 & 0x0000ffff;
            var n1High16 = n1 >>> 16;

            var n2Low16 = n2 & 0x0000ffff;
            var n2High16 = n2 >>> 16;

            var resultHigh32 = n1High16 * n2High16 + ((((n1Low16 * n2Low16) >>> 17) + n1Low16 * n2High16) >>> 15);
            return resultHigh32;
        };
        return IntegerUtilities;
    })();
    TypeScript.IntegerUtilities = IntegerUtilities;
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function (TypeScript) {
    var MathPrototype = (function () {
        function MathPrototype() {
        }
        MathPrototype.max = function (a, b) {
            return a >= b ? a : b;
        };

        MathPrototype.min = function (a, b) {
            return a <= b ? a : b;
        };
        return MathPrototype;
    })();
    TypeScript.MathPrototype = MathPrototype;
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function (TypeScript) {
    (function (Collections) {
        Collections.DefaultStringTableCapacity = 256;

        var StringTableEntry = (function () {
            function StringTableEntry(Text, HashCode, Next) {
                this.Text = Text;
                this.HashCode = HashCode;
                this.Next = Next;
            }
            return StringTableEntry;
        })();

        var StringTable = (function () {
            function StringTable(capacity) {
                this.count = 0;
                var size = TypeScript.Hash.getPrime(capacity);
                this.entries = TypeScript.ArrayUtilities.createArray(size, null);
            }
            StringTable.prototype.addCharArray = function (key, start, len) {
                var hashCode = TypeScript.Hash.computeSimple31BitCharArrayHashCode(key, start, len) & 0x7FFFFFFF;

                var entry = this.findCharArrayEntry(key, start, len, hashCode);
                if (entry !== null) {
                    return entry.Text;
                }

                var slice = key.slice(start, start + len);
                return this.addEntry(TypeScript.StringUtilities.fromCharCodeArray(slice), hashCode);
            };

            StringTable.prototype.findCharArrayEntry = function (key, start, len, hashCode) {
                for (var e = this.entries[hashCode % this.entries.length]; e !== null; e = e.Next) {
                    if (e.HashCode === hashCode && StringTable.textCharArrayEquals(e.Text, key, start, len)) {
                        return e;
                    }
                }

                return null;
            };

            StringTable.prototype.addEntry = function (text, hashCode) {
                var index = hashCode % this.entries.length;

                var e = new StringTableEntry(text, hashCode, this.entries[index]);

                this.entries[index] = e;

                if (this.count === this.entries.length) {
                    this.grow();
                }

                this.count++;
                return e.Text;
            };

            StringTable.prototype.grow = function () {
                var newSize = TypeScript.Hash.expandPrime(this.entries.length);

                var oldEntries = this.entries;
                var newEntries = TypeScript.ArrayUtilities.createArray(newSize, null);

                this.entries = newEntries;

                for (var i = 0; i < oldEntries.length; i++) {
                    var e = oldEntries[i];
                    while (e !== null) {
                        var newIndex = e.HashCode % newSize;
                        var tmp = e.Next;
                        e.Next = newEntries[newIndex];
                        newEntries[newIndex] = e;
                        e = tmp;
                    }
                }
            };

            StringTable.textCharArrayEquals = function (text, array, start, length) {
                if (text.length !== length) {
                    return false;
                }

                var s = start;
                for (var i = 0; i < length; i++) {
                    if (text.charCodeAt(i) !== array[s]) {
                        return false;
                    }

                    s++;
                }

                return true;
            };
            return StringTable;
        })();
        Collections.StringTable = StringTable;

        Collections.DefaultStringTable = new StringTable(Collections.DefaultStringTableCapacity);
    })(TypeScript.Collections || (TypeScript.Collections = {}));
    var Collections = TypeScript.Collections;
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function (TypeScript) {
    var StringUtilities = (function () {
        function StringUtilities() {
        }
        StringUtilities.isString = function (value) {
            return Object.prototype.toString.apply(value, []) === '[object String]';
        };

        StringUtilities.fromCharCodeArray = function (array) {
            return String.fromCharCode.apply(null, array);
        };

        StringUtilities.endsWith = function (string, value) {
            return string.substring(string.length - value.length, string.length) === value;
        };

        StringUtilities.startsWith = function (string, value) {
            return string.substr(0, value.length) === value;
        };

        StringUtilities.copyTo = function (source, sourceIndex, destination, destinationIndex, count) {
            for (var i = 0; i < count; i++) {
                destination[destinationIndex + i] = source.charCodeAt(sourceIndex + i);
            }
        };

        StringUtilities.repeat = function (value, count) {
            return Array(count + 1).join(value);
        };

        StringUtilities.stringEquals = function (val1, val2) {
            return val1 === val2;
        };
        return StringUtilities;
    })();
    TypeScript.StringUtilities = StringUtilities;
})(TypeScript || (TypeScript = {}));
var global = Function("return this").call(null);

var TypeScript;
(function (TypeScript) {
    var Clock;
    (function (Clock) {
        Clock.now;
        Clock.resolution;

        if (typeof WScript !== "undefined" && typeof global['WScript'].InitializeProjection !== "undefined") {
            global['WScript'].InitializeProjection();

            Clock.now = function () {
                return TestUtilities.QueryPerformanceCounter();
            };

            Clock.resolution = TestUtilities.QueryPerformanceFrequency();
        } else {
            Clock.now = function () {
                return Date.now();
            };

            Clock.resolution = 1000;
        }
    })(Clock || (Clock = {}));

    var Timer = (function () {
        function Timer() {
            this.time = 0;
        }
        Timer.prototype.start = function () {
            this.time = 0;
            this.startTime = Clock.now();
        };

        Timer.prototype.end = function () {
            this.time = (Clock.now() - this.startTime);
        };
        return Timer;
    })();
    TypeScript.Timer = Timer;
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function (TypeScript) {
    (function (SyntaxKind) {
        SyntaxKind[SyntaxKind["None"] = 0] = "None";
        SyntaxKind[SyntaxKind["List"] = 1] = "List";
        SyntaxKind[SyntaxKind["SeparatedList"] = 2] = "SeparatedList";
        SyntaxKind[SyntaxKind["TriviaList"] = 3] = "TriviaList";

        SyntaxKind[SyntaxKind["WhitespaceTrivia"] = 4] = "WhitespaceTrivia";
        SyntaxKind[SyntaxKind["NewLineTrivia"] = 5] = "NewLineTrivia";
        SyntaxKind[SyntaxKind["MultiLineCommentTrivia"] = 6] = "MultiLineCommentTrivia";
        SyntaxKind[SyntaxKind["SingleLineCommentTrivia"] = 7] = "SingleLineCommentTrivia";
        SyntaxKind[SyntaxKind["SkippedTokenTrivia"] = 8] = "SkippedTokenTrivia";

        SyntaxKind[SyntaxKind["ErrorToken"] = 9] = "ErrorToken";
        SyntaxKind[SyntaxKind["EndOfFileToken"] = 10] = "EndOfFileToken";

        SyntaxKind[SyntaxKind["IdentifierName"] = 11] = "IdentifierName";

        SyntaxKind[SyntaxKind["RegularExpressionLiteral"] = 12] = "RegularExpressionLiteral";
        SyntaxKind[SyntaxKind["NumericLiteral"] = 13] = "NumericLiteral";
        SyntaxKind[SyntaxKind["StringLiteral"] = 14] = "StringLiteral";

        SyntaxKind[SyntaxKind["BreakKeyword"] = 15] = "BreakKeyword";
        SyntaxKind[SyntaxKind["CaseKeyword"] = 16] = "CaseKeyword";
        SyntaxKind[SyntaxKind["CatchKeyword"] = 17] = "CatchKeyword";
        SyntaxKind[SyntaxKind["ContinueKeyword"] = 18] = "ContinueKeyword";
        SyntaxKind[SyntaxKind["DebuggerKeyword"] = 19] = "DebuggerKeyword";
        SyntaxKind[SyntaxKind["DefaultKeyword"] = 20] = "DefaultKeyword";
        SyntaxKind[SyntaxKind["DeleteKeyword"] = 21] = "DeleteKeyword";
        SyntaxKind[SyntaxKind["DoKeyword"] = 22] = "DoKeyword";
        SyntaxKind[SyntaxKind["ElseKeyword"] = 23] = "ElseKeyword";
        SyntaxKind[SyntaxKind["FalseKeyword"] = 24] = "FalseKeyword";
        SyntaxKind[SyntaxKind["FinallyKeyword"] = 25] = "FinallyKeyword";
        SyntaxKind[SyntaxKind["ForKeyword"] = 26] = "ForKeyword";
        SyntaxKind[SyntaxKind["FunctionKeyword"] = 27] = "FunctionKeyword";
        SyntaxKind[SyntaxKind["IfKeyword"] = 28] = "IfKeyword";
        SyntaxKind[SyntaxKind["InKeyword"] = 29] = "InKeyword";
        SyntaxKind[SyntaxKind["InstanceOfKeyword"] = 30] = "InstanceOfKeyword";
        SyntaxKind[SyntaxKind["NewKeyword"] = 31] = "NewKeyword";
        SyntaxKind[SyntaxKind["NullKeyword"] = 32] = "NullKeyword";
        SyntaxKind[SyntaxKind["ReturnKeyword"] = 33] = "ReturnKeyword";
        SyntaxKind[SyntaxKind["SwitchKeyword"] = 34] = "SwitchKeyword";
        SyntaxKind[SyntaxKind["ThisKeyword"] = 35] = "ThisKeyword";
        SyntaxKind[SyntaxKind["ThrowKeyword"] = 36] = "ThrowKeyword";
        SyntaxKind[SyntaxKind["TrueKeyword"] = 37] = "TrueKeyword";
        SyntaxKind[SyntaxKind["TryKeyword"] = 38] = "TryKeyword";
        SyntaxKind[SyntaxKind["TypeOfKeyword"] = 39] = "TypeOfKeyword";
        SyntaxKind[SyntaxKind["VarKeyword"] = 40] = "VarKeyword";
        SyntaxKind[SyntaxKind["VoidKeyword"] = 41] = "VoidKeyword";
        SyntaxKind[SyntaxKind["WhileKeyword"] = 42] = "WhileKeyword";
        SyntaxKind[SyntaxKind["WithKeyword"] = 43] = "WithKeyword";

        SyntaxKind[SyntaxKind["ClassKeyword"] = 44] = "ClassKeyword";
        SyntaxKind[SyntaxKind["ConstKeyword"] = 45] = "ConstKeyword";
        SyntaxKind[SyntaxKind["EnumKeyword"] = 46] = "EnumKeyword";
        SyntaxKind[SyntaxKind["ExportKeyword"] = 47] = "ExportKeyword";
        SyntaxKind[SyntaxKind["ExtendsKeyword"] = 48] = "ExtendsKeyword";
        SyntaxKind[SyntaxKind["ImportKeyword"] = 49] = "ImportKeyword";
        SyntaxKind[SyntaxKind["SuperKeyword"] = 50] = "SuperKeyword";

        SyntaxKind[SyntaxKind["ImplementsKeyword"] = 51] = "ImplementsKeyword";
        SyntaxKind[SyntaxKind["InterfaceKeyword"] = 52] = "InterfaceKeyword";
        SyntaxKind[SyntaxKind["LetKeyword"] = 53] = "LetKeyword";
        SyntaxKind[SyntaxKind["PackageKeyword"] = 54] = "PackageKeyword";
        SyntaxKind[SyntaxKind["PrivateKeyword"] = 55] = "PrivateKeyword";
        SyntaxKind[SyntaxKind["ProtectedKeyword"] = 56] = "ProtectedKeyword";
        SyntaxKind[SyntaxKind["PublicKeyword"] = 57] = "PublicKeyword";
        SyntaxKind[SyntaxKind["StaticKeyword"] = 58] = "StaticKeyword";
        SyntaxKind[SyntaxKind["YieldKeyword"] = 59] = "YieldKeyword";

        SyntaxKind[SyntaxKind["AnyKeyword"] = 60] = "AnyKeyword";
        SyntaxKind[SyntaxKind["BooleanKeyword"] = 61] = "BooleanKeyword";
        SyntaxKind[SyntaxKind["BoolKeyword"] = 62] = "BoolKeyword";
        SyntaxKind[SyntaxKind["ConstructorKeyword"] = 63] = "ConstructorKeyword";
        SyntaxKind[SyntaxKind["DeclareKeyword"] = 64] = "DeclareKeyword";
        SyntaxKind[SyntaxKind["GetKeyword"] = 65] = "GetKeyword";
        SyntaxKind[SyntaxKind["ModuleKeyword"] = 66] = "ModuleKeyword";
        SyntaxKind[SyntaxKind["RequireKeyword"] = 67] = "RequireKeyword";
        SyntaxKind[SyntaxKind["NumberKeyword"] = 68] = "NumberKeyword";
        SyntaxKind[SyntaxKind["SetKeyword"] = 69] = "SetKeyword";
        SyntaxKind[SyntaxKind["StringKeyword"] = 70] = "StringKeyword";

        SyntaxKind[SyntaxKind["OpenBraceToken"] = 71] = "OpenBraceToken";
        SyntaxKind[SyntaxKind["CloseBraceToken"] = 72] = "CloseBraceToken";
        SyntaxKind[SyntaxKind["OpenParenToken"] = 73] = "OpenParenToken";
        SyntaxKind[SyntaxKind["CloseParenToken"] = 74] = "CloseParenToken";
        SyntaxKind[SyntaxKind["OpenBracketToken"] = 75] = "OpenBracketToken";
        SyntaxKind[SyntaxKind["CloseBracketToken"] = 76] = "CloseBracketToken";
        SyntaxKind[SyntaxKind["DotToken"] = 77] = "DotToken";
        SyntaxKind[SyntaxKind["DotDotDotToken"] = 78] = "DotDotDotToken";
        SyntaxKind[SyntaxKind["SemicolonToken"] = 79] = "SemicolonToken";
        SyntaxKind[SyntaxKind["CommaToken"] = 80] = "CommaToken";
        SyntaxKind[SyntaxKind["LessThanToken"] = 81] = "LessThanToken";
        SyntaxKind[SyntaxKind["GreaterThanToken"] = 82] = "GreaterThanToken";
        SyntaxKind[SyntaxKind["LessThanEqualsToken"] = 83] = "LessThanEqualsToken";
        SyntaxKind[SyntaxKind["GreaterThanEqualsToken"] = 84] = "GreaterThanEqualsToken";
        SyntaxKind[SyntaxKind["EqualsEqualsToken"] = 85] = "EqualsEqualsToken";
        SyntaxKind[SyntaxKind["EqualsGreaterThanToken"] = 86] = "EqualsGreaterThanToken";
        SyntaxKind[SyntaxKind["ExclamationEqualsToken"] = 87] = "ExclamationEqualsToken";
        SyntaxKind[SyntaxKind["EqualsEqualsEqualsToken"] = 88] = "EqualsEqualsEqualsToken";
        SyntaxKind[SyntaxKind["ExclamationEqualsEqualsToken"] = 89] = "ExclamationEqualsEqualsToken";
        SyntaxKind[SyntaxKind["PlusToken"] = 90] = "PlusToken";
        SyntaxKind[SyntaxKind["MinusToken"] = 91] = "MinusToken";
        SyntaxKind[SyntaxKind["AsteriskToken"] = 92] = "AsteriskToken";
        SyntaxKind[SyntaxKind["PercentToken"] = 93] = "PercentToken";
        SyntaxKind[SyntaxKind["PlusPlusToken"] = 94] = "PlusPlusToken";
        SyntaxKind[SyntaxKind["MinusMinusToken"] = 95] = "MinusMinusToken";
        SyntaxKind[SyntaxKind["LessThanLessThanToken"] = 96] = "LessThanLessThanToken";
        SyntaxKind[SyntaxKind["GreaterThanGreaterThanToken"] = 97] = "GreaterThanGreaterThanToken";
        SyntaxKind[SyntaxKind["GreaterThanGreaterThanGreaterThanToken"] = 98] = "GreaterThanGreaterThanGreaterThanToken";
        SyntaxKind[SyntaxKind["AmpersandToken"] = 99] = "AmpersandToken";
        SyntaxKind[SyntaxKind["BarToken"] = 100] = "BarToken";
        SyntaxKind[SyntaxKind["CaretToken"] = 101] = "CaretToken";
        SyntaxKind[SyntaxKind["ExclamationToken"] = 102] = "ExclamationToken";
        SyntaxKind[SyntaxKind["TildeToken"] = 103] = "TildeToken";
        SyntaxKind[SyntaxKind["AmpersandAmpersandToken"] = 104] = "AmpersandAmpersandToken";
        SyntaxKind[SyntaxKind["BarBarToken"] = 105] = "BarBarToken";
        SyntaxKind[SyntaxKind["QuestionToken"] = 106] = "QuestionToken";
        SyntaxKind[SyntaxKind["ColonToken"] = 107] = "ColonToken";
        SyntaxKind[SyntaxKind["EqualsToken"] = 108] = "EqualsToken";
        SyntaxKind[SyntaxKind["PlusEqualsToken"] = 109] = "PlusEqualsToken";
        SyntaxKind[SyntaxKind["MinusEqualsToken"] = 110] = "MinusEqualsToken";
        SyntaxKind[SyntaxKind["AsteriskEqualsToken"] = 111] = "AsteriskEqualsToken";
        SyntaxKind[SyntaxKind["PercentEqualsToken"] = 112] = "PercentEqualsToken";
        SyntaxKind[SyntaxKind["LessThanLessThanEqualsToken"] = 113] = "LessThanLessThanEqualsToken";
        SyntaxKind[SyntaxKind["GreaterThanGreaterThanEqualsToken"] = 114] = "GreaterThanGreaterThanEqualsToken";
        SyntaxKind[SyntaxKind["GreaterThanGreaterThanGreaterThanEqualsToken"] = 115] = "GreaterThanGreaterThanGreaterThanEqualsToken";
        SyntaxKind[SyntaxKind["AmpersandEqualsToken"] = 116] = "AmpersandEqualsToken";
        SyntaxKind[SyntaxKind["BarEqualsToken"] = 117] = "BarEqualsToken";
        SyntaxKind[SyntaxKind["CaretEqualsToken"] = 118] = "CaretEqualsToken";
        SyntaxKind[SyntaxKind["SlashToken"] = 119] = "SlashToken";
        SyntaxKind[SyntaxKind["SlashEqualsToken"] = 120] = "SlashEqualsToken";

        SyntaxKind[SyntaxKind["SourceUnit"] = 121] = "SourceUnit";

        SyntaxKind[SyntaxKind["QualifiedName"] = 122] = "QualifiedName";

        SyntaxKind[SyntaxKind["ObjectType"] = 123] = "ObjectType";
        SyntaxKind[SyntaxKind["FunctionType"] = 124] = "FunctionType";
        SyntaxKind[SyntaxKind["ArrayType"] = 125] = "ArrayType";
        SyntaxKind[SyntaxKind["ConstructorType"] = 126] = "ConstructorType";
        SyntaxKind[SyntaxKind["GenericType"] = 127] = "GenericType";
        SyntaxKind[SyntaxKind["TypeQuery"] = 128] = "TypeQuery";

        SyntaxKind[SyntaxKind["InterfaceDeclaration"] = 129] = "InterfaceDeclaration";
        SyntaxKind[SyntaxKind["FunctionDeclaration"] = 130] = "FunctionDeclaration";
        SyntaxKind[SyntaxKind["ModuleDeclaration"] = 131] = "ModuleDeclaration";
        SyntaxKind[SyntaxKind["ClassDeclaration"] = 132] = "ClassDeclaration";
        SyntaxKind[SyntaxKind["EnumDeclaration"] = 133] = "EnumDeclaration";
        SyntaxKind[SyntaxKind["ImportDeclaration"] = 134] = "ImportDeclaration";
        SyntaxKind[SyntaxKind["ExportAssignment"] = 135] = "ExportAssignment";

        SyntaxKind[SyntaxKind["MemberFunctionDeclaration"] = 136] = "MemberFunctionDeclaration";
        SyntaxKind[SyntaxKind["MemberVariableDeclaration"] = 137] = "MemberVariableDeclaration";
        SyntaxKind[SyntaxKind["ConstructorDeclaration"] = 138] = "ConstructorDeclaration";
        SyntaxKind[SyntaxKind["GetMemberAccessorDeclaration"] = 139] = "GetMemberAccessorDeclaration";
        SyntaxKind[SyntaxKind["SetMemberAccessorDeclaration"] = 140] = "SetMemberAccessorDeclaration";

        SyntaxKind[SyntaxKind["PropertySignature"] = 141] = "PropertySignature";
        SyntaxKind[SyntaxKind["CallSignature"] = 142] = "CallSignature";
        SyntaxKind[SyntaxKind["ConstructSignature"] = 143] = "ConstructSignature";
        SyntaxKind[SyntaxKind["IndexSignature"] = 144] = "IndexSignature";
        SyntaxKind[SyntaxKind["MethodSignature"] = 145] = "MethodSignature";

        SyntaxKind[SyntaxKind["Block"] = 146] = "Block";
        SyntaxKind[SyntaxKind["IfStatement"] = 147] = "IfStatement";
        SyntaxKind[SyntaxKind["VariableStatement"] = 148] = "VariableStatement";
        SyntaxKind[SyntaxKind["ExpressionStatement"] = 149] = "ExpressionStatement";
        SyntaxKind[SyntaxKind["ReturnStatement"] = 150] = "ReturnStatement";
        SyntaxKind[SyntaxKind["SwitchStatement"] = 151] = "SwitchStatement";
        SyntaxKind[SyntaxKind["BreakStatement"] = 152] = "BreakStatement";
        SyntaxKind[SyntaxKind["ContinueStatement"] = 153] = "ContinueStatement";
        SyntaxKind[SyntaxKind["ForStatement"] = 154] = "ForStatement";
        SyntaxKind[SyntaxKind["ForInStatement"] = 155] = "ForInStatement";
        SyntaxKind[SyntaxKind["EmptyStatement"] = 156] = "EmptyStatement";
        SyntaxKind[SyntaxKind["ThrowStatement"] = 157] = "ThrowStatement";
        SyntaxKind[SyntaxKind["WhileStatement"] = 158] = "WhileStatement";
        SyntaxKind[SyntaxKind["TryStatement"] = 159] = "TryStatement";
        SyntaxKind[SyntaxKind["LabeledStatement"] = 160] = "LabeledStatement";
        SyntaxKind[SyntaxKind["DoStatement"] = 161] = "DoStatement";
        SyntaxKind[SyntaxKind["DebuggerStatement"] = 162] = "DebuggerStatement";
        SyntaxKind[SyntaxKind["WithStatement"] = 163] = "WithStatement";

        SyntaxKind[SyntaxKind["PlusExpression"] = 164] = "PlusExpression";
        SyntaxKind[SyntaxKind["NegateExpression"] = 165] = "NegateExpression";
        SyntaxKind[SyntaxKind["BitwiseNotExpression"] = 166] = "BitwiseNotExpression";
        SyntaxKind[SyntaxKind["LogicalNotExpression"] = 167] = "LogicalNotExpression";
        SyntaxKind[SyntaxKind["PreIncrementExpression"] = 168] = "PreIncrementExpression";
        SyntaxKind[SyntaxKind["PreDecrementExpression"] = 169] = "PreDecrementExpression";
        SyntaxKind[SyntaxKind["DeleteExpression"] = 170] = "DeleteExpression";
        SyntaxKind[SyntaxKind["TypeOfExpression"] = 171] = "TypeOfExpression";
        SyntaxKind[SyntaxKind["VoidExpression"] = 172] = "VoidExpression";
        SyntaxKind[SyntaxKind["CommaExpression"] = 173] = "CommaExpression";
        SyntaxKind[SyntaxKind["AssignmentExpression"] = 174] = "AssignmentExpression";
        SyntaxKind[SyntaxKind["AddAssignmentExpression"] = 175] = "AddAssignmentExpression";
        SyntaxKind[SyntaxKind["SubtractAssignmentExpression"] = 176] = "SubtractAssignmentExpression";
        SyntaxKind[SyntaxKind["MultiplyAssignmentExpression"] = 177] = "MultiplyAssignmentExpression";
        SyntaxKind[SyntaxKind["DivideAssignmentExpression"] = 178] = "DivideAssignmentExpression";
        SyntaxKind[SyntaxKind["ModuloAssignmentExpression"] = 179] = "ModuloAssignmentExpression";
        SyntaxKind[SyntaxKind["AndAssignmentExpression"] = 180] = "AndAssignmentExpression";
        SyntaxKind[SyntaxKind["ExclusiveOrAssignmentExpression"] = 181] = "ExclusiveOrAssignmentExpression";
        SyntaxKind[SyntaxKind["OrAssignmentExpression"] = 182] = "OrAssignmentExpression";
        SyntaxKind[SyntaxKind["LeftShiftAssignmentExpression"] = 183] = "LeftShiftAssignmentExpression";
        SyntaxKind[SyntaxKind["SignedRightShiftAssignmentExpression"] = 184] = "SignedRightShiftAssignmentExpression";
        SyntaxKind[SyntaxKind["UnsignedRightShiftAssignmentExpression"] = 185] = "UnsignedRightShiftAssignmentExpression";
        SyntaxKind[SyntaxKind["ConditionalExpression"] = 186] = "ConditionalExpression";
        SyntaxKind[SyntaxKind["LogicalOrExpression"] = 187] = "LogicalOrExpression";
        SyntaxKind[SyntaxKind["LogicalAndExpression"] = 188] = "LogicalAndExpression";
        SyntaxKind[SyntaxKind["BitwiseOrExpression"] = 189] = "BitwiseOrExpression";
        SyntaxKind[SyntaxKind["BitwiseExclusiveOrExpression"] = 190] = "BitwiseExclusiveOrExpression";
        SyntaxKind[SyntaxKind["BitwiseAndExpression"] = 191] = "BitwiseAndExpression";
        SyntaxKind[SyntaxKind["EqualsWithTypeConversionExpression"] = 192] = "EqualsWithTypeConversionExpression";
        SyntaxKind[SyntaxKind["NotEqualsWithTypeConversionExpression"] = 193] = "NotEqualsWithTypeConversionExpression";
        SyntaxKind[SyntaxKind["EqualsExpression"] = 194] = "EqualsExpression";
        SyntaxKind[SyntaxKind["NotEqualsExpression"] = 195] = "NotEqualsExpression";
        SyntaxKind[SyntaxKind["LessThanExpression"] = 196] = "LessThanExpression";
        SyntaxKind[SyntaxKind["GreaterThanExpression"] = 197] = "GreaterThanExpression";
        SyntaxKind[SyntaxKind["LessThanOrEqualExpression"] = 198] = "LessThanOrEqualExpression";
        SyntaxKind[SyntaxKind["GreaterThanOrEqualExpression"] = 199] = "GreaterThanOrEqualExpression";
        SyntaxKind[SyntaxKind["InstanceOfExpression"] = 200] = "InstanceOfExpression";
        SyntaxKind[SyntaxKind["InExpression"] = 201] = "InExpression";
        SyntaxKind[SyntaxKind["LeftShiftExpression"] = 202] = "LeftShiftExpression";
        SyntaxKind[SyntaxKind["SignedRightShiftExpression"] = 203] = "SignedRightShiftExpression";
        SyntaxKind[SyntaxKind["UnsignedRightShiftExpression"] = 204] = "UnsignedRightShiftExpression";
        SyntaxKind[SyntaxKind["MultiplyExpression"] = 205] = "MultiplyExpression";
        SyntaxKind[SyntaxKind["DivideExpression"] = 206] = "DivideExpression";
        SyntaxKind[SyntaxKind["ModuloExpression"] = 207] = "ModuloExpression";
        SyntaxKind[SyntaxKind["AddExpression"] = 208] = "AddExpression";
        SyntaxKind[SyntaxKind["SubtractExpression"] = 209] = "SubtractExpression";
        SyntaxKind[SyntaxKind["PostIncrementExpression"] = 210] = "PostIncrementExpression";
        SyntaxKind[SyntaxKind["PostDecrementExpression"] = 211] = "PostDecrementExpression";
        SyntaxKind[SyntaxKind["MemberAccessExpression"] = 212] = "MemberAccessExpression";
        SyntaxKind[SyntaxKind["InvocationExpression"] = 213] = "InvocationExpression";
        SyntaxKind[SyntaxKind["ArrayLiteralExpression"] = 214] = "ArrayLiteralExpression";
        SyntaxKind[SyntaxKind["ObjectLiteralExpression"] = 215] = "ObjectLiteralExpression";
        SyntaxKind[SyntaxKind["ObjectCreationExpression"] = 216] = "ObjectCreationExpression";
        SyntaxKind[SyntaxKind["ParenthesizedExpression"] = 217] = "ParenthesizedExpression";
        SyntaxKind[SyntaxKind["ParenthesizedArrowFunctionExpression"] = 218] = "ParenthesizedArrowFunctionExpression";
        SyntaxKind[SyntaxKind["SimpleArrowFunctionExpression"] = 219] = "SimpleArrowFunctionExpression";
        SyntaxKind[SyntaxKind["CastExpression"] = 220] = "CastExpression";
        SyntaxKind[SyntaxKind["ElementAccessExpression"] = 221] = "ElementAccessExpression";
        SyntaxKind[SyntaxKind["FunctionExpression"] = 222] = "FunctionExpression";
        SyntaxKind[SyntaxKind["OmittedExpression"] = 223] = "OmittedExpression";

        SyntaxKind[SyntaxKind["VariableDeclaration"] = 224] = "VariableDeclaration";
        SyntaxKind[SyntaxKind["VariableDeclarator"] = 225] = "VariableDeclarator";

        SyntaxKind[SyntaxKind["ArgumentList"] = 226] = "ArgumentList";
        SyntaxKind[SyntaxKind["ParameterList"] = 227] = "ParameterList";
        SyntaxKind[SyntaxKind["TypeArgumentList"] = 228] = "TypeArgumentList";
        SyntaxKind[SyntaxKind["TypeParameterList"] = 229] = "TypeParameterList";

        SyntaxKind[SyntaxKind["HeritageClause"] = 230] = "HeritageClause";
        SyntaxKind[SyntaxKind["EqualsValueClause"] = 231] = "EqualsValueClause";
        SyntaxKind[SyntaxKind["CaseSwitchClause"] = 232] = "CaseSwitchClause";
        SyntaxKind[SyntaxKind["DefaultSwitchClause"] = 233] = "DefaultSwitchClause";
        SyntaxKind[SyntaxKind["ElseClause"] = 234] = "ElseClause";
        SyntaxKind[SyntaxKind["CatchClause"] = 235] = "CatchClause";
        SyntaxKind[SyntaxKind["FinallyClause"] = 236] = "FinallyClause";

        SyntaxKind[SyntaxKind["TypeParameter"] = 237] = "TypeParameter";
        SyntaxKind[SyntaxKind["Constraint"] = 238] = "Constraint";

        SyntaxKind[SyntaxKind["SimplePropertyAssignment"] = 239] = "SimplePropertyAssignment";
        SyntaxKind[SyntaxKind["GetAccessorPropertyAssignment"] = 240] = "GetAccessorPropertyAssignment";
        SyntaxKind[SyntaxKind["SetAccessorPropertyAssignment"] = 241] = "SetAccessorPropertyAssignment";
        SyntaxKind[SyntaxKind["FunctionPropertyAssignment"] = 242] = "FunctionPropertyAssignment";

        SyntaxKind[SyntaxKind["Parameter"] = 243] = "Parameter";
        SyntaxKind[SyntaxKind["EnumElement"] = 244] = "EnumElement";
        SyntaxKind[SyntaxKind["TypeAnnotation"] = 245] = "TypeAnnotation";
        SyntaxKind[SyntaxKind["ExternalModuleReference"] = 246] = "ExternalModuleReference";
        SyntaxKind[SyntaxKind["ModuleNameModuleReference"] = 247] = "ModuleNameModuleReference";

        SyntaxKind[SyntaxKind["FirstStandardKeyword"] = SyntaxKind.BreakKeyword] = "FirstStandardKeyword";
        SyntaxKind[SyntaxKind["LastStandardKeyword"] = SyntaxKind.WithKeyword] = "LastStandardKeyword";

        SyntaxKind[SyntaxKind["FirstFutureReservedKeyword"] = SyntaxKind.ClassKeyword] = "FirstFutureReservedKeyword";
        SyntaxKind[SyntaxKind["LastFutureReservedKeyword"] = SyntaxKind.SuperKeyword] = "LastFutureReservedKeyword";

        SyntaxKind[SyntaxKind["FirstFutureReservedStrictKeyword"] = SyntaxKind.ImplementsKeyword] = "FirstFutureReservedStrictKeyword";
        SyntaxKind[SyntaxKind["LastFutureReservedStrictKeyword"] = SyntaxKind.YieldKeyword] = "LastFutureReservedStrictKeyword";

        SyntaxKind[SyntaxKind["FirstTypeScriptKeyword"] = SyntaxKind.AnyKeyword] = "FirstTypeScriptKeyword";
        SyntaxKind[SyntaxKind["LastTypeScriptKeyword"] = SyntaxKind.StringKeyword] = "LastTypeScriptKeyword";

        SyntaxKind[SyntaxKind["FirstKeyword"] = SyntaxKind.FirstStandardKeyword] = "FirstKeyword";
        SyntaxKind[SyntaxKind["LastKeyword"] = SyntaxKind.LastTypeScriptKeyword] = "LastKeyword";

        SyntaxKind[SyntaxKind["FirstToken"] = SyntaxKind.ErrorToken] = "FirstToken";
        SyntaxKind[SyntaxKind["LastToken"] = SyntaxKind.SlashEqualsToken] = "LastToken";

        SyntaxKind[SyntaxKind["FirstPunctuation"] = SyntaxKind.OpenBraceToken] = "FirstPunctuation";
        SyntaxKind[SyntaxKind["LastPunctuation"] = SyntaxKind.SlashEqualsToken] = "LastPunctuation";

        SyntaxKind[SyntaxKind["FirstFixedWidth"] = SyntaxKind.FirstKeyword] = "FirstFixedWidth";
        SyntaxKind[SyntaxKind["LastFixedWidth"] = SyntaxKind.LastPunctuation] = "LastFixedWidth";
    })(TypeScript.SyntaxKind || (TypeScript.SyntaxKind = {}));
    var SyntaxKind = TypeScript.SyntaxKind;
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function (TypeScript) {
    (function (SyntaxFacts) {
        var textToKeywordKind = {
            "any": 60 /* AnyKeyword */,
            "bool": 62 /* BoolKeyword */,
            "boolean": 61 /* BooleanKeyword */,
            "break": 15 /* BreakKeyword */,
            "case": 16 /* CaseKeyword */,
            "catch": 17 /* CatchKeyword */,
            "class": 44 /* ClassKeyword */,
            "continue": 18 /* ContinueKeyword */,
            "const": 45 /* ConstKeyword */,
            "constructor": 63 /* ConstructorKeyword */,
            "debugger": 19 /* DebuggerKeyword */,
            "declare": 64 /* DeclareKeyword */,
            "default": 20 /* DefaultKeyword */,
            "delete": 21 /* DeleteKeyword */,
            "do": 22 /* DoKeyword */,
            "else": 23 /* ElseKeyword */,
            "enum": 46 /* EnumKeyword */,
            "export": 47 /* ExportKeyword */,
            "extends": 48 /* ExtendsKeyword */,
            "false": 24 /* FalseKeyword */,
            "finally": 25 /* FinallyKeyword */,
            "for": 26 /* ForKeyword */,
            "function": 27 /* FunctionKeyword */,
            "get": 65 /* GetKeyword */,
            "if": 28 /* IfKeyword */,
            "implements": 51 /* ImplementsKeyword */,
            "import": 49 /* ImportKeyword */,
            "in": 29 /* InKeyword */,
            "instanceof": 30 /* InstanceOfKeyword */,
            "interface": 52 /* InterfaceKeyword */,
            "let": 53 /* LetKeyword */,
            "module": 66 /* ModuleKeyword */,
            "new": 31 /* NewKeyword */,
            "null": 32 /* NullKeyword */,
            "number": 68 /* NumberKeyword */,
            "package": 54 /* PackageKeyword */,
            "private": 55 /* PrivateKeyword */,
            "protected": 56 /* ProtectedKeyword */,
            "public": 57 /* PublicKeyword */,
            "require": 67 /* RequireKeyword */,
            "return": 33 /* ReturnKeyword */,
            "set": 69 /* SetKeyword */,
            "static": 58 /* StaticKeyword */,
            "string": 70 /* StringKeyword */,
            "super": 50 /* SuperKeyword */,
            "switch": 34 /* SwitchKeyword */,
            "this": 35 /* ThisKeyword */,
            "throw": 36 /* ThrowKeyword */,
            "true": 37 /* TrueKeyword */,
            "try": 38 /* TryKeyword */,
            "typeof": 39 /* TypeOfKeyword */,
            "var": 40 /* VarKeyword */,
            "void": 41 /* VoidKeyword */,
            "while": 42 /* WhileKeyword */,
            "with": 43 /* WithKeyword */,
            "yield": 59 /* YieldKeyword */,
            "{": 71 /* OpenBraceToken */,
            "}": 72 /* CloseBraceToken */,
            "(": 73 /* OpenParenToken */,
            ")": 74 /* CloseParenToken */,
            "[": 75 /* OpenBracketToken */,
            "]": 76 /* CloseBracketToken */,
            ".": 77 /* DotToken */,
            "...": 78 /* DotDotDotToken */,
            ";": 79 /* SemicolonToken */,
            ",": 80 /* CommaToken */,
            "<": 81 /* LessThanToken */,
            ">": 82 /* GreaterThanToken */,
            "<=": 83 /* LessThanEqualsToken */,
            ">=": 84 /* GreaterThanEqualsToken */,
            "==": 85 /* EqualsEqualsToken */,
            "=>": 86 /* EqualsGreaterThanToken */,
            "!=": 87 /* ExclamationEqualsToken */,
            "===": 88 /* EqualsEqualsEqualsToken */,
            "!==": 89 /* ExclamationEqualsEqualsToken */,
            "+": 90 /* PlusToken */,
            "-": 91 /* MinusToken */,
            "*": 92 /* AsteriskToken */,
            "%": 93 /* PercentToken */,
            "++": 94 /* PlusPlusToken */,
            "--": 95 /* MinusMinusToken */,
            "<<": 96 /* LessThanLessThanToken */,
            ">>": 97 /* GreaterThanGreaterThanToken */,
            ">>>": 98 /* GreaterThanGreaterThanGreaterThanToken */,
            "&": 99 /* AmpersandToken */,
            "|": 100 /* BarToken */,
            "^": 101 /* CaretToken */,
            "!": 102 /* ExclamationToken */,
            "~": 103 /* TildeToken */,
            "&&": 104 /* AmpersandAmpersandToken */,
            "||": 105 /* BarBarToken */,
            "?": 106 /* QuestionToken */,
            ":": 107 /* ColonToken */,
            "=": 108 /* EqualsToken */,
            "+=": 109 /* PlusEqualsToken */,
            "-=": 110 /* MinusEqualsToken */,
            "*=": 111 /* AsteriskEqualsToken */,
            "%=": 112 /* PercentEqualsToken */,
            "<<=": 113 /* LessThanLessThanEqualsToken */,
            ">>=": 114 /* GreaterThanGreaterThanEqualsToken */,
            ">>>=": 115 /* GreaterThanGreaterThanGreaterThanEqualsToken */,
            "&=": 116 /* AmpersandEqualsToken */,
            "|=": 117 /* BarEqualsToken */,
            "^=": 118 /* CaretEqualsToken */,
            "/": 119 /* SlashToken */,
            "/=": 120 /* SlashEqualsToken */
        };

        var kindToText = new Array();

        for (var name in textToKeywordKind) {
            if (textToKeywordKind.hasOwnProperty(name)) {
                kindToText[textToKeywordKind[name]] = name;
            }
        }

        kindToText[63 /* ConstructorKeyword */] = "constructor";

        function getTokenKind(text) {
            if (textToKeywordKind.hasOwnProperty(text)) {
                return textToKeywordKind[text];
            }

            return 0 /* None */;
        }
        SyntaxFacts.getTokenKind = getTokenKind;

        function getText(kind) {
            var result = kindToText[kind];
            return result !== undefined ? result : null;
        }
        SyntaxFacts.getText = getText;

        function isTokenKind(kind) {
            return kind >= 9 /* FirstToken */ && kind <= 120 /* LastToken */;
        }
        SyntaxFacts.isTokenKind = isTokenKind;

        function isAnyKeyword(kind) {
            return kind >= 15 /* FirstKeyword */ && kind <= 70 /* LastKeyword */;
        }
        SyntaxFacts.isAnyKeyword = isAnyKeyword;

        function isStandardKeyword(kind) {
            return kind >= 15 /* FirstStandardKeyword */ && kind <= 43 /* LastStandardKeyword */;
        }
        SyntaxFacts.isStandardKeyword = isStandardKeyword;

        function isFutureReservedKeyword(kind) {
            return kind >= 44 /* FirstFutureReservedKeyword */ && kind <= 50 /* LastFutureReservedKeyword */;
        }
        SyntaxFacts.isFutureReservedKeyword = isFutureReservedKeyword;

        function isFutureReservedStrictKeyword(kind) {
            return kind >= 51 /* FirstFutureReservedStrictKeyword */ && kind <= 59 /* LastFutureReservedStrictKeyword */;
        }
        SyntaxFacts.isFutureReservedStrictKeyword = isFutureReservedStrictKeyword;

        function isAnyPunctuation(kind) {
            return kind >= 71 /* FirstPunctuation */ && kind <= 120 /* LastPunctuation */;
        }
        SyntaxFacts.isAnyPunctuation = isAnyPunctuation;

        function isPrefixUnaryExpressionOperatorToken(tokenKind) {
            return getPrefixUnaryExpressionFromOperatorToken(tokenKind) !== 0 /* None */;
        }
        SyntaxFacts.isPrefixUnaryExpressionOperatorToken = isPrefixUnaryExpressionOperatorToken;

        function isBinaryExpressionOperatorToken(tokenKind) {
            return getBinaryExpressionFromOperatorToken(tokenKind) !== 0 /* None */;
        }
        SyntaxFacts.isBinaryExpressionOperatorToken = isBinaryExpressionOperatorToken;

        function getPrefixUnaryExpressionFromOperatorToken(tokenKind) {
            switch (tokenKind) {
                case 90 /* PlusToken */:
                    return 164 /* PlusExpression */;
                case 91 /* MinusToken */:
                    return 165 /* NegateExpression */;
                case 103 /* TildeToken */:
                    return 166 /* BitwiseNotExpression */;
                case 102 /* ExclamationToken */:
                    return 167 /* LogicalNotExpression */;
                case 94 /* PlusPlusToken */:
                    return 168 /* PreIncrementExpression */;
                case 95 /* MinusMinusToken */:
                    return 169 /* PreDecrementExpression */;

                default:
                    return 0 /* None */;
            }
        }
        SyntaxFacts.getPrefixUnaryExpressionFromOperatorToken = getPrefixUnaryExpressionFromOperatorToken;

        function getPostfixUnaryExpressionFromOperatorToken(tokenKind) {
            switch (tokenKind) {
                case 94 /* PlusPlusToken */:
                    return 210 /* PostIncrementExpression */;
                case 95 /* MinusMinusToken */:
                    return 211 /* PostDecrementExpression */;
                default:
                    return 0 /* None */;
            }
        }
        SyntaxFacts.getPostfixUnaryExpressionFromOperatorToken = getPostfixUnaryExpressionFromOperatorToken;

        function getBinaryExpressionFromOperatorToken(tokenKind) {
            switch (tokenKind) {
                case 92 /* AsteriskToken */:
                    return 205 /* MultiplyExpression */;

                case 119 /* SlashToken */:
                    return 206 /* DivideExpression */;

                case 93 /* PercentToken */:
                    return 207 /* ModuloExpression */;

                case 90 /* PlusToken */:
                    return 208 /* AddExpression */;

                case 91 /* MinusToken */:
                    return 209 /* SubtractExpression */;

                case 96 /* LessThanLessThanToken */:
                    return 202 /* LeftShiftExpression */;

                case 97 /* GreaterThanGreaterThanToken */:
                    return 203 /* SignedRightShiftExpression */;

                case 98 /* GreaterThanGreaterThanGreaterThanToken */:
                    return 204 /* UnsignedRightShiftExpression */;

                case 81 /* LessThanToken */:
                    return 196 /* LessThanExpression */;

                case 82 /* GreaterThanToken */:
                    return 197 /* GreaterThanExpression */;

                case 83 /* LessThanEqualsToken */:
                    return 198 /* LessThanOrEqualExpression */;

                case 84 /* GreaterThanEqualsToken */:
                    return 199 /* GreaterThanOrEqualExpression */;

                case 30 /* InstanceOfKeyword */:
                    return 200 /* InstanceOfExpression */;

                case 29 /* InKeyword */:
                    return 201 /* InExpression */;

                case 85 /* EqualsEqualsToken */:
                    return 192 /* EqualsWithTypeConversionExpression */;

                case 87 /* ExclamationEqualsToken */:
                    return 193 /* NotEqualsWithTypeConversionExpression */;

                case 88 /* EqualsEqualsEqualsToken */:
                    return 194 /* EqualsExpression */;

                case 89 /* ExclamationEqualsEqualsToken */:
                    return 195 /* NotEqualsExpression */;

                case 99 /* AmpersandToken */:
                    return 191 /* BitwiseAndExpression */;

                case 101 /* CaretToken */:
                    return 190 /* BitwiseExclusiveOrExpression */;

                case 100 /* BarToken */:
                    return 189 /* BitwiseOrExpression */;

                case 104 /* AmpersandAmpersandToken */:
                    return 188 /* LogicalAndExpression */;

                case 105 /* BarBarToken */:
                    return 187 /* LogicalOrExpression */;

                case 117 /* BarEqualsToken */:
                    return 182 /* OrAssignmentExpression */;

                case 116 /* AmpersandEqualsToken */:
                    return 180 /* AndAssignmentExpression */;

                case 118 /* CaretEqualsToken */:
                    return 181 /* ExclusiveOrAssignmentExpression */;

                case 113 /* LessThanLessThanEqualsToken */:
                    return 183 /* LeftShiftAssignmentExpression */;

                case 114 /* GreaterThanGreaterThanEqualsToken */:
                    return 184 /* SignedRightShiftAssignmentExpression */;

                case 115 /* GreaterThanGreaterThanGreaterThanEqualsToken */:
                    return 185 /* UnsignedRightShiftAssignmentExpression */;

                case 109 /* PlusEqualsToken */:
                    return 175 /* AddAssignmentExpression */;

                case 110 /* MinusEqualsToken */:
                    return 176 /* SubtractAssignmentExpression */;

                case 111 /* AsteriskEqualsToken */:
                    return 177 /* MultiplyAssignmentExpression */;

                case 120 /* SlashEqualsToken */:
                    return 178 /* DivideAssignmentExpression */;

                case 112 /* PercentEqualsToken */:
                    return 179 /* ModuloAssignmentExpression */;

                case 108 /* EqualsToken */:
                    return 174 /* AssignmentExpression */;

                case 80 /* CommaToken */:
                    return 173 /* CommaExpression */;

                default:
                    return 0 /* None */;
            }
        }
        SyntaxFacts.getBinaryExpressionFromOperatorToken = getBinaryExpressionFromOperatorToken;

        function isAnyDivideToken(kind) {
            switch (kind) {
                case 119 /* SlashToken */:
                case 120 /* SlashEqualsToken */:
                    return true;
                default:
                    return false;
            }
        }
        SyntaxFacts.isAnyDivideToken = isAnyDivideToken;

        function isAnyDivideOrRegularExpressionToken(kind) {
            switch (kind) {
                case 119 /* SlashToken */:
                case 120 /* SlashEqualsToken */:
                case 12 /* RegularExpressionLiteral */:
                    return true;
                default:
                    return false;
            }
        }
        SyntaxFacts.isAnyDivideOrRegularExpressionToken = isAnyDivideOrRegularExpressionToken;

        function isParserGenerated(kind) {
            switch (kind) {
                case 97 /* GreaterThanGreaterThanToken */:
                case 98 /* GreaterThanGreaterThanGreaterThanToken */:
                case 84 /* GreaterThanEqualsToken */:
                case 114 /* GreaterThanGreaterThanEqualsToken */:
                case 115 /* GreaterThanGreaterThanGreaterThanEqualsToken */:
                    return true;
                default:
                    return false;
            }
        }
        SyntaxFacts.isParserGenerated = isParserGenerated;

        function isAnyBinaryExpression(kind) {
            switch (kind) {
                case 173 /* CommaExpression */:
                case 174 /* AssignmentExpression */:
                case 175 /* AddAssignmentExpression */:
                case 176 /* SubtractAssignmentExpression */:
                case 177 /* MultiplyAssignmentExpression */:
                case 178 /* DivideAssignmentExpression */:
                case 179 /* ModuloAssignmentExpression */:
                case 180 /* AndAssignmentExpression */:
                case 181 /* ExclusiveOrAssignmentExpression */:
                case 182 /* OrAssignmentExpression */:
                case 183 /* LeftShiftAssignmentExpression */:
                case 184 /* SignedRightShiftAssignmentExpression */:
                case 185 /* UnsignedRightShiftAssignmentExpression */:
                case 187 /* LogicalOrExpression */:
                case 188 /* LogicalAndExpression */:
                case 189 /* BitwiseOrExpression */:
                case 190 /* BitwiseExclusiveOrExpression */:
                case 191 /* BitwiseAndExpression */:
                case 192 /* EqualsWithTypeConversionExpression */:
                case 193 /* NotEqualsWithTypeConversionExpression */:
                case 194 /* EqualsExpression */:
                case 195 /* NotEqualsExpression */:
                case 196 /* LessThanExpression */:
                case 197 /* GreaterThanExpression */:
                case 198 /* LessThanOrEqualExpression */:
                case 199 /* GreaterThanOrEqualExpression */:
                case 200 /* InstanceOfExpression */:
                case 201 /* InExpression */:
                case 202 /* LeftShiftExpression */:
                case 203 /* SignedRightShiftExpression */:
                case 204 /* UnsignedRightShiftExpression */:
                case 205 /* MultiplyExpression */:
                case 206 /* DivideExpression */:
                case 207 /* ModuloExpression */:
                case 208 /* AddExpression */:
                case 209 /* SubtractExpression */:
                    return true;
            }

            return false;
        }
        SyntaxFacts.isAnyBinaryExpression = isAnyBinaryExpression;
    })(TypeScript.SyntaxFacts || (TypeScript.SyntaxFacts = {}));
    var SyntaxFacts = TypeScript.SyntaxFacts;
})(TypeScript || (TypeScript = {}));
var argumentChecks = false;
var forPrettyPrinter = false;

var interfaces = {
    IMemberDeclarationSyntax: 'IClassElementSyntax',
    IStatementSyntax: 'IModuleElementSyntax',
    INameSyntax: 'ITypeSyntax',
    ITypeSyntax: 'IUnaryExpressionSyntax',
    IUnaryExpressionSyntax: 'IExpressionSyntax'
};

var definitions = [
    {
        name: 'SourceUnitSyntax',
        baseType: 'SyntaxNode',
        children: [
            { name: 'moduleElements', isList: true, elementType: 'IModuleElementSyntax' },
            { name: 'endOfFileToken', isToken: true }
        ]
    },
    {
        name: 'ModuleReferenceSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IModuleReferenceSyntax'],
        isAbstract: true,
        children: [],
        isTypeScriptSpecific: true
    },
    {
        name: 'ExternalModuleReferenceSyntax',
        baseType: 'ModuleReferenceSyntax',
        children: [
            { name: 'moduleOrRequireKeyword', isToken: true, tokenKinds: ['ModuleKeyword', 'RequireKeyword'] },
            { name: 'openParenToken', isToken: true },
            { name: 'stringLiteral', isToken: true },
            { name: 'closeParenToken', isToken: true }
        ],
        isTypeScriptSpecific: true
    },
    {
        name: 'ModuleNameModuleReferenceSyntax',
        baseType: 'ModuleReferenceSyntax',
        children: [
            { name: 'moduleName', type: 'INameSyntax' }
        ],
        isTypeScriptSpecific: true
    },
    {
        name: 'ImportDeclarationSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IModuleElementSyntax'],
        children: [
            { name: 'modifiers', isList: true, elementType: 'ISyntaxToken' },
            { name: 'importKeyword', isToken: true },
            { name: 'identifier', isToken: true, tokenKinds: ['IdentifierName'] },
            { name: 'equalsToken', isToken: true },
            { name: 'moduleReference', type: 'ModuleReferenceSyntax' },
            { name: 'semicolonToken', isToken: true }
        ],
        isTypeScriptSpecific: true
    },
    {
        name: 'ExportAssignmentSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IModuleElementSyntax'],
        children: [
            { name: 'exportKeyword', isToken: true },
            { name: 'equalsToken', isToken: true },
            { name: 'identifier', isToken: true, tokenKinds: ['IdentifierName'] },
            { name: 'semicolonToken', isToken: true }
        ],
        isTypeScriptSpecific: true
    },
    {
        name: 'ClassDeclarationSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IModuleElementSyntax'],
        children: [
            { name: 'modifiers', isList: true, elementType: 'ISyntaxToken' },
            { name: 'classKeyword', isToken: true },
            { name: 'identifier', isToken: true, tokenKinds: ['IdentifierName'] },
            { name: 'typeParameterList', type: 'TypeParameterListSyntax', isOptional: true },
            { name: 'heritageClauses', isList: true, elementType: 'HeritageClauseSyntax' },
            { name: 'openBraceToken', isToken: true },
            { name: 'classElements', isList: true, elementType: 'IClassElementSyntax' },
            { name: 'closeBraceToken', isToken: true }
        ],
        isTypeScriptSpecific: true
    },
    {
        name: 'InterfaceDeclarationSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IModuleElementSyntax'],
        children: [
            { name: 'modifiers', isList: true, elementType: 'ISyntaxToken' },
            { name: 'interfaceKeyword', isToken: true },
            { name: 'identifier', isToken: true, tokenKinds: ['IdentifierName'] },
            { name: 'typeParameterList', type: 'TypeParameterListSyntax', isOptional: true },
            { name: 'heritageClauses', isList: true, elementType: 'HeritageClauseSyntax' },
            { name: 'body', type: 'ObjectTypeSyntax' }
        ],
        isTypeScriptSpecific: true
    },
    {
        name: 'HeritageClauseSyntax',
        baseType: 'SyntaxNode',
        children: [
            { name: 'extendsOrImplementsKeyword', isToken: true, tokenKinds: ['ExtendsKeyword', 'ImplementsKeyword'] },
            { name: 'typeNames', isSeparatedList: true, requiresAtLeastOneItem: true, elementType: 'INameSyntax' }
        ],
        isTypeScriptSpecific: true
    },
    {
        name: 'ModuleDeclarationSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IModuleElementSyntax'],
        children: [
            { name: 'modifiers', isList: true, elementType: 'ISyntaxToken' },
            { name: 'moduleKeyword', isToken: true },
            { name: 'moduleName', type: 'INameSyntax', isOptional: true },
            { name: 'stringLiteral', isToken: true, isOptional: true },
            { name: 'openBraceToken', isToken: true },
            { name: 'moduleElements', isList: true, elementType: 'IModuleElementSyntax' },
            { name: 'closeBraceToken', isToken: true }
        ],
        isTypeScriptSpecific: true
    },
    {
        name: 'FunctionDeclarationSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IStatementSyntax'],
        children: [
            { name: 'modifiers', isList: true, elementType: 'ISyntaxToken' },
            { name: 'functionKeyword', isToken: true },
            { name: 'identifier', isToken: true, tokenKinds: ['IdentifierName'] },
            { name: 'callSignature', type: 'CallSignatureSyntax' },
            { name: 'block', type: 'BlockSyntax', isOptional: true },
            { name: 'semicolonToken', isToken: true, isOptional: true }
        ]
    },
    {
        name: 'VariableStatementSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IStatementSyntax'],
        children: [
            { name: 'modifiers', isList: true, elementType: 'ISyntaxToken' },
            { name: 'variableDeclaration', type: 'VariableDeclarationSyntax' },
            { name: 'semicolonToken', isToken: true }
        ]
    },
    {
        name: 'VariableDeclarationSyntax',
        baseType: 'SyntaxNode',
        children: [
            { name: 'varKeyword', isToken: true },
            { name: 'variableDeclarators', isSeparatedList: true, requiresAtLeastOneItem: true, elementType: 'VariableDeclaratorSyntax' }
        ]
    },
    {
        name: 'VariableDeclaratorSyntax',
        baseType: 'SyntaxNode',
        children: [
            { name: 'identifier', isToken: true, tokenKinds: ['IdentifierName'] },
            { name: 'typeAnnotation', type: 'TypeAnnotationSyntax', isOptional: true, isTypeScriptSpecific: true },
            { name: 'equalsValueClause', type: 'EqualsValueClauseSyntax', isOptional: true }
        ]
    },
    {
        name: 'EqualsValueClauseSyntax',
        baseType: 'SyntaxNode',
        children: [
            { name: 'equalsToken', isToken: true },
            { name: 'value', type: 'IExpressionSyntax' }
        ]
    },
    {
        name: 'PrefixUnaryExpressionSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IUnaryExpressionSyntax'],
        children: [
            { name: 'kind', type: 'SyntaxKind' },
            { name: 'operatorToken', isToken: true, tokenKinds: ['PlusPlusToken', 'MinusMinusToken', 'PlusToken', 'MinusToken', 'TildeToken', 'ExclamationToken'] },
            { name: 'operand', type: 'IUnaryExpressionSyntax' }
        ]
    },
    {
        name: 'ArrayLiteralExpressionSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IUnaryExpressionSyntax'],
        children: [
            { name: 'openBracketToken', isToken: true },
            { name: 'expressions', isSeparatedList: true, elementType: 'IExpressionSyntax' },
            { name: 'closeBracketToken', isToken: true }
        ]
    },
    {
        name: 'OmittedExpressionSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IExpressionSyntax'],
        children: []
    },
    {
        name: 'ParenthesizedExpressionSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IUnaryExpressionSyntax'],
        children: [
            { name: 'openParenToken', isToken: true },
            { name: 'expression', type: 'IExpressionSyntax' },
            { name: 'closeParenToken', isToken: true }
        ]
    },
    {
        name: 'ArrowFunctionExpressionSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IUnaryExpressionSyntax'],
        isAbstract: true,
        children: [],
        isTypeScriptSpecific: true
    },
    {
        name: 'SimpleArrowFunctionExpressionSyntax',
        baseType: 'ArrowFunctionExpressionSyntax',
        children: [
            { name: 'identifier', isToken: true, tokenKinds: ['IdentifierName'] },
            { name: 'equalsGreaterThanToken', isToken: true },
            { name: 'body', type: 'ISyntaxNodeOrToken' }
        ],
        isTypeScriptSpecific: true
    },
    {
        name: 'ParenthesizedArrowFunctionExpressionSyntax',
        baseType: 'ArrowFunctionExpressionSyntax',
        children: [
            { name: 'callSignature', type: 'CallSignatureSyntax' },
            { name: 'equalsGreaterThanToken', isToken: true },
            { name: 'body', type: 'ISyntaxNodeOrToken' }
        ],
        isTypeScriptSpecific: true
    },
    {
        name: 'QualifiedNameSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['INameSyntax'],
        children: [
            { name: 'left', type: 'INameSyntax' },
            { name: 'dotToken', isToken: true },
            { name: 'right', isToken: true, tokenKinds: ['IdentifierName'] }
        ],
        isTypeScriptSpecific: true
    },
    {
        name: 'TypeArgumentListSyntax',
        baseType: 'SyntaxNode',
        children: [
            { name: 'lessThanToken', isToken: true },
            { name: 'typeArguments', isSeparatedList: true, elementType: 'ITypeSyntax' },
            { name: 'greaterThanToken', isToken: true }
        ],
        isTypeScriptSpecific: true
    },
    {
        name: 'ConstructorTypeSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['ITypeSyntax'],
        children: [
            { name: 'newKeyword', isToken: true },
            { name: 'typeParameterList', type: 'TypeParameterListSyntax', isOptional: true },
            { name: 'parameterList', type: 'ParameterListSyntax' },
            { name: 'equalsGreaterThanToken', isToken: true },
            { name: 'type', type: 'ITypeSyntax' }
        ],
        isTypeScriptSpecific: true
    },
    {
        name: 'FunctionTypeSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['ITypeSyntax'],
        children: [
            { name: 'typeParameterList', type: 'TypeParameterListSyntax', isOptional: true },
            { name: 'parameterList', type: 'ParameterListSyntax' },
            { name: 'equalsGreaterThanToken', isToken: true },
            { name: 'type', type: 'ITypeSyntax' }
        ],
        isTypeScriptSpecific: true
    },
    {
        name: 'ObjectTypeSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['ITypeSyntax'],
        children: [
            { name: 'openBraceToken', isToken: true },
            { name: 'typeMembers', isSeparatedList: true, elementType: 'ITypeMemberSyntax' },
            { name: 'closeBraceToken', isToken: true }
        ],
        isTypeScriptSpecific: true
    },
    {
        name: 'ArrayTypeSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['ITypeSyntax'],
        children: [
            { name: 'type', type: 'ITypeSyntax' },
            { name: 'openBracketToken', isToken: true },
            { name: 'closeBracketToken', isToken: true }
        ],
        isTypeScriptSpecific: true
    },
    {
        name: 'GenericTypeSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['ITypeSyntax'],
        children: [
            { name: 'name', type: 'INameSyntax' },
            { name: 'typeArgumentList', type: 'TypeArgumentListSyntax' }
        ],
        isTypeScriptSpecific: true
    },
    {
        name: 'TypeQuerySyntax',
        baseType: 'SyntaxNode',
        interfaces: ['ITypeSyntax'],
        children: [
            { name: 'typeOfKeyword', isToken: true },
            { name: 'name', type: 'INameSyntax' }
        ],
        isTypeScriptSpecific: true
    },
    {
        name: 'TypeAnnotationSyntax',
        baseType: 'SyntaxNode',
        children: [
            { name: 'colonToken', isToken: true },
            { name: 'type', type: 'ITypeSyntax' }
        ],
        isTypeScriptSpecific: true
    },
    {
        name: 'BlockSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IStatementSyntax'],
        children: [
            { name: 'openBraceToken', isToken: true },
            { name: 'statements', isList: true, elementType: 'IStatementSyntax' },
            { name: 'closeBraceToken', isToken: true }
        ]
    },
    {
        name: 'ParameterSyntax',
        baseType: 'SyntaxNode',
        children: [
            { name: 'dotDotDotToken', isToken: true, isOptional: true, isTypeScriptSpecific: true },
            { name: 'publicOrPrivateKeyword', isToken: true, isOptional: true, tokenKinds: ['PublicKeyword', 'PrivateKeyword'], isTypeScriptSpecific: true },
            { name: 'identifier', isToken: true, tokenKinds: ['IdentifierName'] },
            { name: 'questionToken', isToken: true, isOptional: true, isTypeScriptSpecific: true },
            { name: 'typeAnnotation', type: 'TypeAnnotationSyntax', isOptional: true, isTypeScriptSpecific: true },
            { name: 'equalsValueClause', type: 'EqualsValueClauseSyntax', isOptional: true, isTypeScriptSpecific: true }
        ]
    },
    {
        name: 'MemberAccessExpressionSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IUnaryExpressionSyntax'],
        children: [
            { name: 'expression', type: 'IExpressionSyntax' },
            { name: 'dotToken', isToken: true },
            { name: 'name', isToken: true, tokenKinds: ['IdentifierName'] }
        ]
    },
    {
        name: 'PostfixUnaryExpressionSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IUnaryExpressionSyntax'],
        children: [
            { name: 'kind', type: 'SyntaxKind' },
            { name: 'operand', type: 'IExpressionSyntax' },
            { name: 'operatorToken', isToken: true, tokenKinds: ['PlusPlusToken', 'MinusMinusToken'] }
        ]
    },
    {
        name: 'ElementAccessExpressionSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IUnaryExpressionSyntax'],
        children: [
            { name: 'expression', type: 'IExpressionSyntax' },
            { name: 'openBracketToken', isToken: true },
            { name: 'argumentExpression', type: 'IExpressionSyntax' },
            { name: 'closeBracketToken', isToken: true }
        ]
    },
    {
        name: 'InvocationExpressionSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IUnaryExpressionSyntax'],
        children: [
            { name: 'expression', type: 'IExpressionSyntax' },
            { name: 'argumentList', type: 'ArgumentListSyntax' }
        ]
    },
    {
        name: 'ArgumentListSyntax',
        baseType: 'SyntaxNode',
        children: [
            { name: 'typeArgumentList', type: 'TypeArgumentListSyntax', isOptional: true },
            { name: 'openParenToken', isToken: true },
            { name: 'arguments', isSeparatedList: true, elementType: 'IExpressionSyntax' },
            { name: 'closeParenToken', isToken: true }
        ]
    },
    {
        name: 'BinaryExpressionSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IExpressionSyntax'],
        children: [
            { name: 'kind', type: 'SyntaxKind' },
            { name: 'left', type: 'IExpressionSyntax' },
            {
                name: 'operatorToken',
                isToken: true,
                tokenKinds: [
                    'AsteriskToken',
                    'SlashToken',
                    'PercentToken',
                    'PlusToken',
                    'MinusToken',
                    'LessThanLessThanToken',
                    'GreaterThanGreaterThanToken',
                    'GreaterThanGreaterThanGreaterThanToken',
                    'LessThanToken',
                    'GreaterThanToken',
                    'LessThanEqualsToken',
                    'GreaterThanEqualsToken',
                    'InstanceOfKeyword',
                    'InKeyword',
                    'EqualsEqualsToken',
                    'ExclamationEqualsToken',
                    'EqualsEqualsEqualsToken',
                    'ExclamationEqualsEqualsToken',
                    'AmpersandToken',
                    'CaretToken',
                    'BarToken',
                    'AmpersandAmpersandToken',
                    'BarBarToken',
                    'BarEqualsToken',
                    'AmpersandEqualsToken',
                    'CaretEqualsToken',
                    'LessThanLessThanEqualsToken',
                    'GreaterThanGreaterThanEqualsToken',
                    'GreaterThanGreaterThanGreaterThanEqualsToken',
                    'PlusEqualsToken',
                    'MinusEqualsToken',
                    'AsteriskEqualsToken',
                    'SlashEqualsToken',
                    'PercentEqualsToken',
                    'EqualsToken',
                    'CommaToken'
                ]
            },
            { name: 'right', type: 'IExpressionSyntax' }
        ]
    },
    {
        name: 'ConditionalExpressionSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IExpressionSyntax'],
        children: [
            { name: 'condition', type: 'IExpressionSyntax' },
            { name: 'questionToken', isToken: true },
            { name: 'whenTrue', type: 'IExpressionSyntax' },
            { name: 'colonToken', isToken: true },
            { name: 'whenFalse', type: 'IExpressionSyntax' }
        ]
    },
    {
        name: 'ConstructSignatureSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['ITypeMemberSyntax'],
        children: [
            { name: 'newKeyword', isToken: true },
            { name: 'callSignature', type: 'CallSignatureSyntax' }
        ],
        isTypeScriptSpecific: true
    },
    {
        name: 'MethodSignatureSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['ITypeMemberSyntax'],
        children: [
            { name: 'propertyName', isToken: true, tokenKinds: ['IdentifierName', 'StringLiteral', 'NumericLiteral'] },
            { name: 'questionToken', isToken: true, isOptional: true, itTypeScriptSpecific: true },
            { name: 'callSignature', type: 'CallSignatureSyntax' }
        ]
    },
    {
        name: 'IndexSignatureSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['ITypeMemberSyntax', 'IClassElementSyntax'],
        children: [
            { name: 'openBracketToken', isToken: true },
            { name: 'parameter', type: 'ParameterSyntax' },
            { name: 'closeBracketToken', isToken: true },
            { name: 'typeAnnotation', type: 'TypeAnnotationSyntax', isOptional: true }
        ],
        isTypeScriptSpecific: true
    },
    {
        name: 'PropertySignatureSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['ITypeMemberSyntax'],
        children: [
            { name: 'propertyName', isToken: true, tokenKinds: ['IdentifierName', 'StringLiteral', 'NumericLiteral'] },
            { name: 'questionToken', isToken: true, isOptional: true },
            { name: 'typeAnnotation', type: 'TypeAnnotationSyntax', isOptional: true }
        ],
        isTypeScriptSpecific: true
    },
    {
        name: 'CallSignatureSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['ITypeMemberSyntax'],
        children: [
            { name: 'typeParameterList', type: 'TypeParameterListSyntax', isOptional: true, isTypeScriptSpecific: true },
            { name: 'parameterList', type: 'ParameterListSyntax' },
            { name: 'typeAnnotation', type: 'TypeAnnotationSyntax', isOptional: true, isTypeScriptSpecific: true }
        ]
    },
    {
        name: 'ParameterListSyntax',
        baseType: 'SyntaxNode',
        children: [
            { name: 'openParenToken', isToken: true },
            { name: 'parameters', isSeparatedList: true, elementType: 'ParameterSyntax' },
            { name: 'closeParenToken', isToken: true }
        ]
    },
    {
        name: 'TypeParameterListSyntax',
        baseType: 'SyntaxNode',
        children: [
            { name: 'lessThanToken', isToken: true },
            { name: 'typeParameters', isSeparatedList: true, elementType: 'TypeParameterSyntax' },
            { name: 'greaterThanToken', isToken: true }
        ],
        isTypeScriptSpecific: true
    },
    {
        name: 'TypeParameterSyntax',
        baseType: 'SyntaxNode',
        children: [
            { name: 'identifier', isToken: true, tokenKinds: ['IdentifierName'] },
            { name: 'constraint', type: 'ConstraintSyntax', isOptional: true }
        ],
        isTypeScriptSpecific: true
    },
    {
        name: 'ConstraintSyntax',
        baseType: 'SyntaxNode',
        children: [
            { name: 'extendsKeyword', isToken: true },
            { name: 'type', type: 'ITypeSyntax' }
        ],
        isTypeScriptSpecific: true
    },
    {
        name: 'ElseClauseSyntax',
        baseType: 'SyntaxNode',
        children: [
            { name: 'elseKeyword', isToken: true },
            { name: 'statement', type: 'IStatementSyntax' }
        ]
    },
    {
        name: 'IfStatementSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IStatementSyntax'],
        children: [
            { name: 'ifKeyword', isToken: true },
            { name: 'openParenToken', isToken: true },
            { name: 'condition', type: 'IExpressionSyntax' },
            { name: 'closeParenToken', isToken: true },
            { name: 'statement', type: 'IStatementSyntax' },
            { name: 'elseClause', type: 'ElseClauseSyntax', isOptional: true }
        ]
    },
    {
        name: 'ExpressionStatementSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IStatementSyntax'],
        children: [
            { name: 'expression', type: 'IExpressionSyntax' },
            { name: 'semicolonToken', isToken: true }
        ]
    },
    {
        name: 'ConstructorDeclarationSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IClassElementSyntax'],
        children: [
            { name: 'constructorKeyword', isToken: true },
            { name: 'parameterList', type: 'ParameterListSyntax' },
            { name: 'block', type: 'BlockSyntax', isOptional: true },
            { name: 'semicolonToken', isToken: true, isOptional: true }
        ],
        isTypeScriptSpecific: true
    },
    {
        name: 'MemberFunctionDeclarationSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IMemberDeclarationSyntax'],
        children: [
            { name: 'modifiers', isList: true, elementType: 'ISyntaxToken' },
            { name: 'propertyName', isToken: true, tokenKinds: ['IdentifierName', 'StringLiteral', 'NumericLiteral'] },
            { name: 'callSignature', type: 'CallSignatureSyntax' },
            { name: 'block', type: 'BlockSyntax', isOptional: true },
            { name: 'semicolonToken', isToken: true, isOptional: true }
        ],
        isTypeScriptSpecific: true
    },
    {
        name: 'MemberAccessorDeclarationSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IMemberDeclarationSyntax'],
        isAbstract: true,
        children: [],
        isTypeScriptSpecific: true
    },
    {
        name: 'GetMemberAccessorDeclarationSyntax',
        baseType: 'MemberAccessorDeclarationSyntax',
        children: [
            { name: 'modifiers', isList: true, elementType: 'ISyntaxToken' },
            { name: 'getKeyword', isToken: true },
            { name: 'propertyName', isToken: true, tokenKinds: ['IdentifierName', 'StringLiteral', 'NumericLiteral'] },
            { name: 'parameterList', type: 'ParameterListSyntax' },
            { name: 'typeAnnotation', type: 'TypeAnnotationSyntax', isOptional: true },
            { name: 'block', type: 'BlockSyntax' }
        ],
        isTypeScriptSpecific: true
    },
    {
        name: 'SetMemberAccessorDeclarationSyntax',
        baseType: 'MemberAccessorDeclarationSyntax',
        children: [
            { name: 'modifiers', isList: true, elementType: 'ISyntaxToken' },
            { name: 'setKeyword', isToken: true },
            { name: 'propertyName', isToken: true, tokenKinds: ['IdentifierName', 'StringLiteral', 'NumericLiteral'] },
            { name: 'parameterList', type: 'ParameterListSyntax' },
            { name: 'block', type: 'BlockSyntax' }
        ],
        isTypeScriptSpecific: true
    },
    {
        name: 'MemberVariableDeclarationSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IMemberDeclarationSyntax'],
        children: [
            { name: 'modifiers', isList: true, elementType: 'ISyntaxToken' },
            { name: 'variableDeclarator', type: 'VariableDeclaratorSyntax' },
            { name: 'semicolonToken', isToken: true }
        ],
        isTypeScriptSpecific: true
    },
    {
        name: 'ThrowStatementSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IStatementSyntax'],
        children: [
            { name: 'throwKeyword', isToken: true },
            { name: 'expression', type: 'IExpressionSyntax' },
            { name: 'semicolonToken', isToken: true }
        ]
    },
    {
        name: 'ReturnStatementSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IStatementSyntax'],
        children: [
            { name: 'returnKeyword', isToken: true },
            { name: 'expression', type: 'IExpressionSyntax', isOptional: true },
            { name: 'semicolonToken', isToken: true }
        ]
    },
    {
        name: 'ObjectCreationExpressionSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IUnaryExpressionSyntax'],
        children: [
            { name: 'newKeyword', isToken: true },
            { name: 'expression', type: 'IExpressionSyntax' },
            { name: 'argumentList', type: 'ArgumentListSyntax', isOptional: true }
        ]
    },
    {
        name: 'SwitchStatementSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IStatementSyntax'],
        children: [
            { name: 'switchKeyword', isToken: true },
            { name: 'openParenToken', isToken: true },
            { name: 'expression', type: 'IExpressionSyntax' },
            { name: 'closeParenToken', isToken: true },
            { name: 'openBraceToken', isToken: true },
            { name: 'switchClauses', isList: true, elementType: 'SwitchClauseSyntax' },
            { name: 'closeBraceToken', isToken: true }
        ]
    },
    {
        name: 'SwitchClauseSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['ISwitchClauseSyntax'],
        isAbstract: true,
        children: []
    },
    {
        name: 'CaseSwitchClauseSyntax',
        baseType: 'SwitchClauseSyntax',
        children: [
            { name: 'caseKeyword', isToken: true },
            { name: 'expression', type: 'IExpressionSyntax' },
            { name: 'colonToken', isToken: true },
            { name: 'statements', isList: true, elementType: 'IStatementSyntax' }
        ]
    },
    {
        name: 'DefaultSwitchClauseSyntax',
        baseType: 'SwitchClauseSyntax',
        children: [
            { name: 'defaultKeyword', isToken: true },
            { name: 'colonToken', isToken: true },
            { name: 'statements', isList: true, elementType: 'IStatementSyntax' }
        ]
    },
    {
        name: 'BreakStatementSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IStatementSyntax'],
        children: [
            { name: 'breakKeyword', isToken: true },
            { name: 'identifier', isToken: true, isOptional: true, tokenKinds: ['IdentifierName'] },
            { name: 'semicolonToken', isToken: true }
        ]
    },
    {
        name: 'ContinueStatementSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IStatementSyntax'],
        children: [
            { name: 'continueKeyword', isToken: true },
            { name: 'identifier', isToken: true, isOptional: true, tokenKinds: ['IdentifierName'] },
            { name: 'semicolonToken', isToken: true }
        ]
    },
    {
        name: 'IterationStatementSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IStatementSyntax'],
        isAbstract: true,
        children: []
    },
    {
        name: 'BaseForStatementSyntax',
        baseType: 'IterationStatementSyntax',
        isAbstract: true,
        children: []
    },
    {
        name: 'ForStatementSyntax',
        baseType: 'BaseForStatementSyntax',
        children: [
            { name: 'forKeyword', isToken: true },
            { name: 'openParenToken', isToken: true },
            { name: 'variableDeclaration', type: 'VariableDeclarationSyntax', isOptional: true },
            { name: 'initializer', type: 'IExpressionSyntax', isOptional: true },
            { name: 'firstSemicolonToken', isToken: true, tokenKinds: ['SemicolonToken'] },
            { name: 'condition', type: 'IExpressionSyntax', isOptional: true },
            { name: 'secondSemicolonToken', isToken: true, tokenKinds: ['SemicolonToken'] },
            { name: 'incrementor', type: 'IExpressionSyntax', isOptional: true },
            { name: 'closeParenToken', isToken: true },
            { name: 'statement', type: 'IStatementSyntax' }
        ]
    },
    {
        name: 'ForInStatementSyntax',
        baseType: 'BaseForStatementSyntax',
        children: [
            { name: 'forKeyword', isToken: true },
            { name: 'openParenToken', isToken: true },
            { name: 'variableDeclaration', type: 'VariableDeclarationSyntax', isOptional: true },
            { name: 'left', type: 'IExpressionSyntax', isOptional: true },
            { name: 'inKeyword', isToken: true },
            { name: 'expression', type: 'IExpressionSyntax' },
            { name: 'closeParenToken', isToken: true },
            { name: 'statement', type: 'IStatementSyntax' }
        ]
    },
    {
        name: 'WhileStatementSyntax',
        baseType: 'IterationStatementSyntax',
        children: [
            { name: 'whileKeyword', isToken: true },
            { name: 'openParenToken', isToken: true },
            { name: 'condition', type: 'IExpressionSyntax' },
            { name: 'closeParenToken', isToken: true },
            { name: 'statement', type: 'IStatementSyntax' }
        ]
    },
    {
        name: 'WithStatementSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IStatementSyntax'],
        children: [
            { name: 'withKeyword', isToken: true },
            { name: 'openParenToken', isToken: true },
            { name: 'condition', type: 'IExpressionSyntax' },
            { name: 'closeParenToken', isToken: true },
            { name: 'statement', type: 'IStatementSyntax' }
        ]
    },
    {
        name: 'EnumDeclarationSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IModuleElementSyntax'],
        children: [
            { name: 'modifiers', isList: true, elementType: 'ISyntaxToken' },
            { name: 'enumKeyword', isToken: true },
            { name: 'identifier', isToken: true, tokenKinds: ['IdentifierName'] },
            { name: 'openBraceToken', isToken: true },
            { name: 'enumElements', isSeparatedList: true, elementType: 'EnumElementSyntax' },
            { name: 'closeBraceToken', isToken: true }
        ],
        isTypeScriptSpecific: true
    },
    {
        name: 'EnumElementSyntax',
        baseType: 'SyntaxNode',
        children: [
            { name: 'propertyName', isToken: true, tokenKinds: ['IdentifierName', 'StringLiteral', 'NumericLiteral'] },
            { name: 'equalsValueClause', type: 'EqualsValueClauseSyntax', isOptional: true }
        ]
    },
    {
        name: 'CastExpressionSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IUnaryExpressionSyntax'],
        children: [
            { name: 'lessThanToken', isToken: true },
            { name: 'type', type: 'ITypeSyntax' },
            { name: 'greaterThanToken', isToken: true },
            { name: 'expression', type: 'IUnaryExpressionSyntax' }
        ],
        isTypeScriptSpecific: true
    },
    {
        name: 'ObjectLiteralExpressionSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IUnaryExpressionSyntax'],
        children: [
            { name: 'openBraceToken', isToken: true },
            { name: 'propertyAssignments', isSeparatedList: true, elementType: 'PropertyAssignmentSyntax' },
            { name: 'closeBraceToken', isToken: true }
        ]
    },
    {
        name: 'PropertyAssignmentSyntax',
        baseType: 'SyntaxNode',
        isAbstract: true,
        children: []
    },
    {
        name: 'SimplePropertyAssignmentSyntax',
        baseType: 'PropertyAssignmentSyntax',
        children: [
            { name: 'propertyName', isToken: true, tokenKinds: ['IdentifierName', 'StringLiteral', 'NumericLiteral'] },
            { name: 'colonToken', isToken: true },
            { name: 'expression', type: 'IExpressionSyntax' }
        ]
    },
    {
        name: 'FunctionPropertyAssignmentSyntax',
        baseType: 'PropertyAssignmentSyntax',
        children: [
            { name: 'propertyName', isToken: true, tokenKinds: ['IdentifierName', 'StringLiteral', 'NumericLiteral'] },
            { name: 'callSignature', type: 'CallSignatureSyntax' },
            { name: 'block', type: 'BlockSyntax' }
        ]
    },
    {
        name: 'AccessorPropertyAssignmentSyntax',
        baseType: 'PropertyAssignmentSyntax',
        isAbstract: true,
        children: []
    },
    {
        name: 'GetAccessorPropertyAssignmentSyntax',
        baseType: 'AccessorPropertyAssignmentSyntax',
        children: [
            { name: 'getKeyword', isToken: true },
            { name: 'propertyName', isToken: true, tokenKinds: ['IdentifierName'] },
            { name: 'openParenToken', isToken: true },
            { name: 'closeParenToken', isToken: true },
            { name: 'typeAnnotation', type: 'TypeAnnotationSyntax', isOptional: true },
            { name: 'block', type: 'BlockSyntax' }
        ]
    },
    {
        name: 'SetAccessorPropertyAssignmentSyntax',
        baseType: 'AccessorPropertyAssignmentSyntax',
        children: [
            { name: 'setKeyword', isToken: true },
            { name: 'propertyName', isToken: true, tokenKinds: ['IdentifierName'] },
            { name: 'openParenToken', isToken: true },
            { name: 'parameter', type: 'ParameterSyntax' },
            { name: 'closeParenToken', isToken: true },
            { name: 'block', type: 'BlockSyntax' }
        ]
    },
    {
        name: 'FunctionExpressionSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IUnaryExpressionSyntax'],
        children: [
            { name: 'functionKeyword', isToken: true },
            { name: 'identifier', isToken: true, isOptional: true, tokenKinds: ['IdentifierName'] },
            { name: 'callSignature', type: 'CallSignatureSyntax' },
            { name: 'block', type: 'BlockSyntax' }
        ]
    },
    {
        name: 'EmptyStatementSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IStatementSyntax'],
        children: [
            { name: 'semicolonToken', isToken: true }
        ]
    },
    {
        name: 'TryStatementSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IStatementSyntax'],
        children: [
            { name: 'tryKeyword', isToken: true },
            { name: 'block', type: 'BlockSyntax' },
            { name: 'catchClause', type: 'CatchClauseSyntax', isOptional: true },
            { name: 'finallyClause', type: 'FinallyClauseSyntax', isOptional: true }
        ]
    },
    {
        name: 'CatchClauseSyntax',
        baseType: 'SyntaxNode',
        children: [
            { name: 'catchKeyword', isToken: true },
            { name: 'openParenToken', isToken: true },
            { name: 'identifier', isToken: true, tokenKinds: ['IdentifierName'] },
            { name: 'typeAnnotation', type: 'TypeAnnotationSyntax', isOptional: true, isTypeScriptSpecified: true },
            { name: 'closeParenToken', isToken: true },
            { name: 'block', type: 'BlockSyntax' }
        ]
    },
    {
        name: 'FinallyClauseSyntax',
        baseType: 'SyntaxNode',
        children: [
            { name: 'finallyKeyword', isToken: true },
            { name: 'block', type: 'BlockSyntax' }
        ]
    },
    {
        name: 'LabeledStatementSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IStatementSyntax'],
        children: [
            { name: 'identifier', isToken: true, tokenKinds: ['IdentifierName'] },
            { name: 'colonToken', isToken: true },
            { name: 'statement', type: 'IStatementSyntax' }
        ]
    },
    {
        name: 'DoStatementSyntax',
        baseType: 'IterationStatementSyntax',
        children: [
            { name: 'doKeyword', isToken: true },
            { name: 'statement', type: 'IStatementSyntax' },
            { name: 'whileKeyword', isToken: true },
            { name: 'openParenToken', isToken: true },
            { name: 'condition', type: 'IExpressionSyntax' },
            { name: 'closeParenToken', isToken: true },
            { name: 'semicolonToken', isToken: true }
        ]
    },
    {
        name: 'TypeOfExpressionSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IUnaryExpressionSyntax'],
        children: [
            { name: 'typeOfKeyword', isToken: true },
            { name: 'expression', type: 'IExpressionSyntax' }
        ]
    },
    {
        name: 'DeleteExpressionSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IUnaryExpressionSyntax'],
        children: [
            { name: 'deleteKeyword', isToken: true },
            { name: 'expression', type: 'IExpressionSyntax' }
        ]
    },
    {
        name: 'VoidExpressionSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IUnaryExpressionSyntax'],
        children: [
            { name: 'voidKeyword', isToken: true },
            { name: 'expression', type: 'IExpressionSyntax' }
        ]
    },
    {
        name: 'DebuggerStatementSyntax',
        baseType: 'SyntaxNode',
        interfaces: ['IStatementSyntax'],
        children: [
            { name: 'debuggerKeyword', isToken: true },
            { name: 'semicolonToken', isToken: true }
        ]
    }
];

function getStringWithoutSuffix(definition) {
    if (TypeScript.StringUtilities.endsWith(definition, "Syntax")) {
        return definition.substring(0, definition.length - "Syntax".length);
    }

    return definition;
}

function getNameWithoutSuffix(definition) {
    return getStringWithoutSuffix(definition.name);
}

function getType(child) {
    if (child.isToken) {
        return "ISyntaxToken";
    } else if (child.isSeparatedList) {
        return "ISeparatedSyntaxList";
    } else if (child.isList) {
        return "ISyntaxList";
    } else {
        return child.type;
    }
}

var hasKind = false;

function pascalCase(value) {
    return value.substr(0, 1).toUpperCase() + value.substr(1);
}

function camelCase(value) {
    return value.substr(0, 1).toLowerCase() + value.substr(1);
}

function getSafeName(child) {
    if (child.name === "arguments") {
        return "_" + child.name;
    }

    return child.name;
}

function getPropertyAccess(child) {
    if (child.type === "SyntaxKind") {
        return "this._kind";
    }

    return "this." + child.name;
}

function generateProperties(definition) {
    var result = "";

    for (var i = 0; i < definition.children.length; i++) {
        var child = definition.children[i];

        if (getType(child) === "SyntaxKind") {
            result += "    private _" + child.name + ": " + getType(child) + ";\r\n";
        }

        hasKind = hasKind || (getType(child) === "SyntaxKind");
    }

    if (definition.children.length > 0) {
        result += "\r\n";
    }

    return result;
}

function generateNullChecks(definition) {
    var result = "";

    for (var i = 0; i < definition.children.length; i++) {
        var child = definition.children[i];

        if (!child.isOptional && !child.isToken) {
            result += "        if (" + child.name + " === null) { throw Errors.argumentNull('" + child.name + "'); }\r\n";
        }
    }

    return result;
}

function generateIfKindCheck(child, tokenKinds, indent) {
    var result = "";

    result += indent + "        if (";

    for (var j = 0; j < tokenKinds.length; j++) {
        if (j > 0) {
            result += " && ";
        }

        var tokenKind = tokenKinds[j];
        if (tokenKind === "IdentifierName") {
            result += "!SyntaxFacts.isIdentifierName(" + child.name + ".tokenKind)";
        } else {
            result += child.name + ".tokenKind !== SyntaxKind." + tokenKind;
        }
    }

    result += ") { throw Errors.argument('" + child.name + "'); }\r\n";
    return result;
}

function generateSwitchCase(tokenKind, indent) {
    return indent + "            case SyntaxKind." + tokenKind + ":\r\n";
}

function generateBreakStatement(indent) {
    return indent + "                break;\r\n";
}

function generateSwitchCases(tokenKinds, indent) {
    var result = "";
    for (var j = 0; j < tokenKinds.length; j++) {
        var tokenKind = tokenKinds[j];

        result += generateSwitchCase(tokenKind, indent);
    }

    if (tokenKinds.length > 0) {
        result += generateBreakStatement(indent);
    }

    return result;
}

function generateDefaultCase(child, indent) {
    var result = "";

    result += indent + "            default:\r\n";
    result += indent + "                throw Errors.argument('" + child.name + "');\r\n";

    return result;
}

function generateSwitchKindCheck(child, tokenKinds, indent) {
    if (tokenKinds.length === 0) {
        return "";
    }

    var result = "";

    var identifierName = TypeScript.ArrayUtilities.where(tokenKinds, function (v) {
        return v.indexOf("IdentifierName") >= 0;
    });
    var notIdentifierName = TypeScript.ArrayUtilities.where(tokenKinds, function (v) {
        return v.indexOf("IdentifierName") < 0;
    });

    if (identifierName.length > 0) {
        result += indent + "        if (!SyntaxFacts.isIdentifierName(" + child.name + ".tokenKind)) {\r\n";
        if (notIdentifierName.length === 0) {
            result += indent + "            throw Errors.argument('" + child.name + "');\r\n";
            result += indent + "        }\r\n";
            return result;
        }

        indent += "    ";
    }

    if (notIdentifierName.length <= 2) {
        result += generateIfKindCheck(child, notIdentifierName, indent);
    } else if (notIdentifierName.length > 2) {
        result += indent + "        switch (" + child.name + ".tokenKind) {\r\n";
        result += generateSwitchCases(notIdentifierName, indent);
        result += generateDefaultCase(child, indent);
        result += indent + "        }\r\n";
    }

    if (identifierName.length > 0) {
        result += indent + "    }\r\n";
    }

    return result;
}

function tokenKinds(child) {
    return child.tokenKinds ? child.tokenKinds : [pascalCase(child.name)];
}

function generateKindCheck(child) {
    var indent = "";
    var result = "";

    if (child.isOptional) {
        indent = "    ";

        result += "        if (" + child.name + " !== null) {\r\n";
    }

    var kinds = tokenKinds(child);

    if (kinds.length <= 2) {
        result += generateIfKindCheck(child, kinds, indent);
    } else {
        result += generateSwitchKindCheck(child, kinds, indent);
    }

    if (child.isOptional) {
        result += "        }\r\n";
    }

    return result;
}

function generateKindChecks(definition) {
    var result = "";

    for (var i = 0; i < definition.children.length; i++) {
        var child = definition.children[i];

        if (child.isToken) {
            result += generateKindCheck(child);
        }
    }

    return result;
}

function generateArgumentChecks(definition) {
    var result = "";

    if (argumentChecks) {
        result += generateNullChecks(definition);
        result += generateKindChecks(definition);

        if (definition.children.length > 0) {
            result += "\r\n";
        }
    }

    return result;
}

function generateConstructor(definition) {
    if (definition.isAbstract) {
    }

    var i;
    var child;
    var base = baseType(definition);
    var subchildren = childrenInAllSubclasses(definition);
    var baseSubchildren = childrenInAllSubclasses(base);
    var baseSubchildrenNames = TypeScript.ArrayUtilities.select(baseSubchildren, function (c) {
        return c.name;
    });

    var result = "";
    result += "        constructor(";

    var children = definition.children;
    if (subchildren.length > 0) {
        children = subchildren;
    }

    for (i = 0; i < children.length; i++) {
        child = children[i];

        if (getType(child) !== "SyntaxKind" && !TypeScript.ArrayUtilities.contains(baseSubchildrenNames, child.name)) {
            result += "public ";
        }

        result += child.name + ": " + getType(child);
        result += ",\r\n                    ";
    }

    result += "parsedInStrictMode: boolean) {\r\n";

    result += "            super(";

    for (i = 0; i < baseSubchildrenNames.length; i++) {
        result += baseSubchildrenNames[i] + ", ";
    }

    result += "parsedInStrictMode); \r\n";
    if (definition.children.length > 0) {
        result += "\r\n";
    }

    result += generateArgumentChecks(definition);

    for (i = 0; i < definition.children.length; i++) {
        child = definition.children[i];

        if (child.type === "SyntaxKind") {
            result += "            " + getPropertyAccess(child) + " = " + child.name + ";\r\n";
        }
    }

    result += "        }\r\n";

    return result;
}

function isOptional(child) {
    if (child.isOptional) {
        return true;
    }

    if (child.isList && !child.requiresAtLeastOneItem) {
        return true;
    }

    if (child.isSeparatedList && !child.requiresAtLeastOneItem) {
        return true;
    }

    return false;
}

function generateFactory1Method(definition) {
    var mandatoryChildren = TypeScript.ArrayUtilities.where(definition.children, function (c) {
        return !isOptional(c);
    });
    if (mandatoryChildren.length === definition.children.length) {
        return "";
    }

    var result = "\r\n    public static create(";
    var i;
    var child;

    for (i = 0; i < mandatoryChildren.length; i++) {
        child = mandatoryChildren[i];

        result += child.name + ": " + getType(child);

        if (i < mandatoryChildren.length - 1) {
            result += ",\r\n                         ";
        }
    }

    result += "): " + definition.name + " {\r\n";

    result += "        return new " + definition.name + "(";

    for (i = 0; i < definition.children.length; i++) {
        child = definition.children[i];

        if (!isOptional(child)) {
            result += child.name;
        } else if (child.isList) {
            result += "Syntax.emptyList";
        } else if (child.isSeparatedList) {
            result += "Syntax.emptySeparatedList";
        } else {
            result += "null";
        }

        result += ", ";
    }

    result += "/*parsedInStrictMode:*/ false);\r\n";
    result += "    }\r\n";

    return result;
}

function isKeywordOrPunctuation(kind) {
    if (TypeScript.StringUtilities.endsWith(kind, "Keyword")) {
        return true;
    }

    if (TypeScript.StringUtilities.endsWith(kind, "Token") && kind !== "IdentifierName" && kind !== "EndOfFileToken") {
        return true;
    }

    return false;
}

function isDefaultConstructable(definition) {
    if (definition === null || definition.isAbstract) {
        return false;
    }

    for (var i = 0; i < definition.children.length; i++) {
        if (isMandatory(definition.children[i])) {
            return false;
        }
    }

    return true;
}

function isMandatory(child) {
    if (isOptional(child)) {
        return false;
    }

    if (child.type === "SyntaxKind" || child.isList || child.isSeparatedList) {
        return true;
    }

    if (child.isToken) {
        var kinds = tokenKinds(child);
        var isFixed = kinds.length === 1 && isKeywordOrPunctuation(kinds[0]);

        return !isFixed;
    }

    return !isDefaultConstructable(memberDefinitionType(child));
}

function generateFactory2Method(definition) {
    var mandatoryChildren = TypeScript.ArrayUtilities.where(definition.children, isMandatory);
    if (mandatoryChildren.length === definition.children.length) {
        return "";
    }

    var i;
    var child;
    var result = "\r\n    public static create1(";

    for (i = 0; i < mandatoryChildren.length; i++) {
        child = mandatoryChildren[i];

        result += child.name + ": " + getType(child);

        if (i < mandatoryChildren.length - 1) {
            result += ",\r\n                          ";
        }
    }

    result += "): " + definition.name + " {\r\n";
    result += "        return new " + definition.name + "(";

    for (i = 0; i < definition.children.length; i++) {
        child = definition.children[i];

        if (isMandatory(child)) {
            result += child.name;
        } else if (child.isList) {
            result += "Syntax.emptyList";
        } else if (child.isSeparatedList) {
            result += "Syntax.emptySeparatedList";
        } else if (isOptional(child)) {
            result += "null";
        } else if (child.isToken) {
            result += "Syntax.token(SyntaxKind." + tokenKinds(child)[0] + ")";
        } else {
            result += child.type + ".create1()";
        }

        result += ", ";
    }

    result += "/*parsedInStrictMode:*/ false);\r\n";
    result += "    }\r\n";

    return result;
}

function generateFactoryMethod(definition) {
    return generateFactory1Method(definition) + generateFactory2Method(definition);
}

function generateAcceptMethods(definition) {
    var result = "";

    if (!definition.isAbstract) {
        result += "\r\n";
        result += "    public accept(visitor: ISyntaxVisitor): any {\r\n";
        result += "        return visitor.visit" + getNameWithoutSuffix(definition) + "(this);\r\n";
        result += "    }\r\n";
    }

    return result;
}

function generateIsMethod(definition) {
    var result = "";

    if (definition.interfaces) {
        var ifaces = definition.interfaces.slice(0);
        var i;
        for (i = 0; i < ifaces.length; i++) {
            var current = ifaces[i];

            while (current !== undefined) {
                if (!TypeScript.ArrayUtilities.contains(ifaces, current)) {
                    ifaces.push(current);
                }

                current = interfaces[current];
            }
        }

        for (i = 0; i < ifaces.length; i++) {
            var type = ifaces[i];
            type = getStringWithoutSuffix(type);
            if (isInterface(type)) {
                type = type.substr(1);
            }

            result += "\r\n";
            result += "    public is" + type + "(): boolean {\r\n";
            result += "        return true;\r\n";
            result += "    }\r\n";
        }
    }

    return result;
}

function generateKindMethod(definition) {
    var result = "";

    if (!definition.isAbstract) {
        if (!hasKind) {
            result += "\r\n";
            result += "    public kind(): SyntaxKind {\r\n";
            result += "        return SyntaxKind." + getNameWithoutSuffix(definition) + ";\r\n";
            result += "    }\r\n";
        }
    }

    return result;
}

function generateSlotMethods(definition) {
    var result = "";

    if (!definition.isAbstract) {
        result += "\r\n";
        result += "    public childCount(): number {\r\n";
        var slotCount = hasKind ? (definition.children.length - 1) : definition.children.length;

        result += "        return " + slotCount + ";\r\n";
        result += "    }\r\n\r\n";

        result += "    public childAt(slot: number): ISyntaxElement {\r\n";

        if (slotCount === 0) {
            result += "        throw Errors.invalidOperation();\r\n";
        } else {
            result += "        switch (slot) {\r\n";

            var index = 0;
            for (var i = 0; i < definition.children.length; i++) {
                var child = definition.children[i];
                if (child.type === "SyntaxKind") {
                    continue;
                }

                result += "            case " + index + ": return this." + definition.children[i].name + ";\r\n";
                index++;
            }

            result += "            default: throw Errors.invalidOperation();\r\n";
            result += "        }\r\n";
        }

        result += "    }\r\n";
    }

    return result;
}

function generateFirstTokenMethod(definition) {
    var result = "";

    if (!definition.isAbstract) {
        result += "\r\n";
        result += "    public firstToken(): ISyntaxToken {\r\n";
        result += "        var token = null;\r\n";

        for (var i = 0; i < definition.children.length; i++) {
            var child = definition.children[i];

            if (getType(child) === "SyntaxKind") {
                continue;
            }

            if (child.name === "endOfFileToken") {
                continue;
            }

            result += "        if (";

            if (child.isOptional) {
                result += getPropertyAccess(child) + " !== null && ";
            }

            if (child.isToken) {
                result += getPropertyAccess(child) + ".width() > 0";
                result += ") { return " + getPropertyAccess(child) + "; }\r\n";
            } else {
                result += "(token = " + getPropertyAccess(child) + ".firstToken()) !== null";
                result += ") { return token; }\r\n";
            }
        }

        if (definition.name === "SourceUnitSyntax") {
            result += "        return this._endOfFileToken;\r\n";
        } else {
            result += "        return null;\r\n";
        }

        result += "    }\r\n";
    }

    return result;
}

function generateLastTokenMethod(definition) {
    var result = "";

    if (!definition.isAbstract) {
        result += "\r\n";
        result += "    public lastToken(): ISyntaxToken {\r\n";

        if (definition.name === "SourceUnitSyntax") {
            result += "        return this._endOfFileToken;\r\n";
        } else {
            result += "        var token = null;\r\n";

            for (var i = definition.children.length - 1; i >= 0; i--) {
                var child = definition.children[i];

                if (getType(child) === "SyntaxKind") {
                    continue;
                }

                if (child.name === "endOfFileToken") {
                    continue;
                }

                result += "        if (";

                if (child.isOptional) {
                    result += getPropertyAccess(child) + " !== null && ";
                }

                if (child.isToken) {
                    result += getPropertyAccess(child) + ".width() > 0";
                    result += ") { return " + getPropertyAccess(child) + "; }\r\n";
                } else {
                    result += "(token = " + getPropertyAccess(child) + ".lastToken()) !== null";
                    result += ") { return token; }\r\n";
                }
            }

            result += "        return null;\r\n";
        }

        result += "    }\r\n";
    }

    return result;
}

function generateInsertChildrenIntoMethod(definition) {
    var result = "";

    if (!definition.isAbstract) {
        result += "\r\n";
        result += "    public insertChildrenInto(array: ISyntaxElement[], index: number) {\r\n";

        for (var i = definition.children.length - 1; i >= 0; i--) {
            var child = definition.children[i];

            if (child.type === "SyntaxKind") {
                continue;
            }

            if (child.isList || child.isSeparatedList) {
                result += "        " + getPropertyAccess(child) + ".insertChildrenInto(array, index);\r\n";
            } else if (child.isOptional) {
                result += "        if (" + getPropertyAccess(child) + " !== null) { array.splice(index, 0, " + getPropertyAccess(child) + "); }\r\n";
            } else {
                result += "        array.splice(index, 0, " + getPropertyAccess(child) + ");\r\n";
            }
        }

        result += "    }\r\n";
    }

    return result;
}

function baseType(definition) {
    return TypeScript.ArrayUtilities.firstOrDefault(definitions, function (d) {
        return d.name === definition.baseType;
    });
}

function memberDefinitionType(child) {
    return TypeScript.ArrayUtilities.firstOrDefault(definitions, function (d) {
        return d.name === child.type;
    });
}

function derivesFrom(def1, def2) {
    var current = def1;
    while (current !== null) {
        var base = baseType(current);
        if (base === def2) {
            return true;
        }

        current = base;
    }

    return false;
}

function contains(definition, child) {
    return TypeScript.ArrayUtilities.any(definition.children, function (c) {
        return c.name === child.name && c.isList === child.isList && c.isSeparatedList === child.isSeparatedList && c.isToken === child.isToken && c.type === child.type;
    });
}

function childrenInAllSubclasses(definition) {
    var result = [];

    if (definition !== null && definition.isAbstract) {
        var subclasses = TypeScript.ArrayUtilities.where(definitions, function (d) {
            return !d.isAbstract && derivesFrom(d, definition);
        });

        if (subclasses.length > 0) {
            var firstSubclass = subclasses[0];

            for (var i = 0; i < firstSubclass.children.length; i++) {
                var child = firstSubclass.children[i];

                if (TypeScript.ArrayUtilities.all(subclasses, function (s) {
                    return contains(s, child);
                })) {
                    result.push(child);
                }
            }
        }
    }

    return result;
}

function generateAccessors(definition) {
    var result = "";

    for (var i = 0; i < definition.children.length; i++) {
        var child = definition.children[i];

        if (child.type === "SyntaxKind") {
            result += "\r\n";
            result += "    public " + child.name + "(): " + getType(child) + " {\r\n";
            result += "        return " + getPropertyAccess(child) + ";\r\n";
            result += "    }\r\n";
        }
    }

    return result;
}

function generateWithMethod(definition, child) {
    var result = "";
    result += "\r\n";
    result += "    public with" + pascalCase(child.name) + "(" + getSafeName(child) + ": " + getType(child) + "): " + definition.name + " {\r\n";
    result += "        return this.update(";

    for (var i = 0; i < definition.children.length; i++) {
        if (i > 0) {
            result += ", ";
        }

        if (definition.children[i] === child) {
            result += getSafeName(child);
        } else {
            result += getPropertyAccess(definition.children[i]);
        }
    }

    result += ");\r\n";
    result += "    }\r\n";

    if (child.isList || child.isSeparatedList) {
        if (TypeScript.StringUtilities.endsWith(child.name, "s")) {
            var pascalName = pascalCase(child.name);
            pascalName = pascalName.substring(0, pascalName.length - 1);

            var argName = getSafeName(child);
            argName = argName.substring(0, argName.length - 1);

            result += "\r\n";
            result += "    public with" + pascalName + "(" + argName + ": " + child.elementType + "): " + definition.name + " {\r\n";
            result += "        return this.with" + pascalCase(child.name) + "(";

            if (child.isList) {
                result += "Syntax.list([" + argName + "])";
            } else {
                result += "Syntax.separatedList([" + argName + "])";
            }

            result += ");\r\n";
            result += "    }\r\n";
        }
    }

    return result;
}

function generateWithMethods(definition) {
    var result = "";

    for (var i = 0; i < definition.children.length; i++) {
        var child = definition.children[i];
        result += generateWithMethod(definition, child);
    }

    return result;
}

function generateTriviaMethods(definition) {
    var result = "\r\n";
    result += "    public withLeadingTrivia(trivia: ISyntaxTriviaList): " + definition.name + " {\r\n";
    result += "        return <" + definition.name + ">super.withLeadingTrivia(trivia);\r\n";
    result += "    }\r\n\r\n";
    result += "    public withTrailingTrivia(trivia: ISyntaxTriviaList): " + definition.name + " {\r\n";
    result += "        return <" + definition.name + ">super.withTrailingTrivia(trivia);\r\n";
    result += "    }\r\n";

    return result;
}

function generateUpdateMethod(definition) {
    if (definition.isAbstract) {
        return "";
    }

    var result = "";

    result += "\r\n";

    result += "    public ";

    result += "update(";
    var i;
    var child;

    for (i = 0; i < definition.children.length; i++) {
        child = definition.children[i];

        result += getSafeName(child) + ": " + getType(child);

        if (i < definition.children.length - 1) {
            result += ",\r\n                  ";
        }
    }

    result += "): " + definition.name + " {\r\n";

    if (definition.children.length === 0) {
        result += "        return this;\r\n";
    } else {
        result += "        if (";

        for (i = 0; i < definition.children.length; i++) {
            child = definition.children[i];

            if (i !== 0) {
                result += " && ";
            }

            result += getPropertyAccess(child) + " === " + getSafeName(child);
        }

        result += ") {\r\n";
        result += "            return this;\r\n";
        result += "        }\r\n\r\n";

        result += "        return new " + definition.name + "(";

        for (i = 0; i < definition.children.length; i++) {
            child = definition.children[i];

            result += getSafeName(child);
            result += ", ";
        }

        result += "/*parsedInStrictMode:*/ this.parsedInStrictMode());\r\n";
    }

    result += "    }\r\n";

    return result;
}

function generateIsTypeScriptSpecificMethod(definition) {
    var result = "\r\n    public isTypeScriptSpecific(): boolean {\r\n";

    if (definition.isTypeScriptSpecific) {
        result += "        return true;\r\n";
    } else {
        for (var i = 0; i < definition.children.length; i++) {
            var child = definition.children[i];

            if (child.type === "SyntaxKind") {
                continue;
            }

            if (child.isTypeScriptSpecific) {
                result += "        if (" + getPropertyAccess(child) + " !== null) { return true; }\r\n";
                continue;
            }

            if (child.isToken) {
                continue;
            }

            if (child.isOptional) {
                result += "        if (" + getPropertyAccess(child) + " !== null && " + getPropertyAccess(child) + ".isTypeScriptSpecific()) { return true; }\r\n";
            } else {
                result += "        if (" + getPropertyAccess(child) + ".isTypeScriptSpecific()) { return true; }\r\n";
            }
        }

        result += "        return false;\r\n";
    }

    result += "    }\r\n";

    return result;
}

function couldBeRegularExpressionToken(child) {
    var kinds = tokenKinds(child);
    return TypeScript.ArrayUtilities.contains(kinds, "SlashToken") || TypeScript.ArrayUtilities.contains(kinds, "SlashEqualsToken") || TypeScript.ArrayUtilities.contains(kinds, "RegularExpressionLiteral");
}

function generateStructuralEqualsMethod(definition) {
    if (definition.isAbstract) {
        return "";
    }

    var result = "\r\n    private structuralEquals(node: SyntaxNode): boolean {\r\n";
    result += "        if (this === node) { return true; }\r\n";
    result += "        if (node === null) { return false; }\r\n";
    result += "        if (this.kind() !== node.kind()) { return false; }\r\n";
    result += "        var other = <" + definition.name + ">node;\r\n";

    for (var i = 0; i < definition.children.length; i++) {
        var child = definition.children[i];

        if (child.type !== "SyntaxKind") {
            if (child.isList) {
                result += "        if (!Syntax.listStructuralEquals(" + getPropertyAccess(child) + ", other._" + child.name + ")) { return false; }\r\n";
            } else if (child.isSeparatedList) {
                result += "        if (!Syntax.separatedListStructuralEquals(" + getPropertyAccess(child) + ", other._" + child.name + ")) { return false; }\r\n";
            } else if (child.isToken) {
                result += "        if (!Syntax.tokenStructuralEquals(" + getPropertyAccess(child) + ", other._" + child.name + ")) { return false; }\r\n";
            } else if (isNodeOrToken(child)) {
                result += "        if (!Syntax.nodeOrTokenStructuralEquals(" + getPropertyAccess(child) + ", other._" + child.name + ")) { return false; }\r\n";
            } else {
                result += "        if (!Syntax.nodeStructuralEquals(" + getPropertyAccess(child) + ", other._" + child.name + ")) { return false; }\r\n";
            }
        }
    }

    result += "        return true;\r\n";
    result += "    }\r\n";
    return result;
}

function generateNode(definition) {
    var result = "    export class " + definition.name + " extends " + definition.baseType;

    if (definition.interfaces) {
        result += " implements " + definition.interfaces.join(", ");
    }

    result += " {\r\n";
    hasKind = false;

    result += generateProperties(definition);
    result += generateConstructor(definition);
    result += generateAcceptMethods(definition);
    result += generateKindMethod(definition);
    result += generateSlotMethods(definition);
    result += generateIsMethod(definition);
    result += generateAccessors(definition);
    result += generateUpdateMethod(definition);

    if (!forPrettyPrinter) {
        result += generateFactoryMethod(definition);
        result += generateTriviaMethods(definition);
        result += generateWithMethods(definition);
        result += generateIsTypeScriptSpecificMethod(definition);
    }

    result += "    }";

    return result;
}

function generateNodes() {
    var result = "///<reference path='references.ts' />\r\n\r\n";

    result += "module TypeScript {\r\n";

    for (var i = 0; i < definitions.length; i++) {
        var definition = definitions[i];

        if (i > 0) {
            result += "\r\n\r\n";
        }

        result += generateNode(definition);
    }

    result += "\r\n}";

    return result;
}

function isInterface(name) {
    return name.substr(0, 1) === "I" && name.substr(1, 1).toUpperCase() === name.substr(1, 1);
}

function isNodeOrToken(child) {
    return child.type && isInterface(child.type);
}

function generateRewriter() {
    var result = "///<reference path='references.ts' />\r\n\r\n";

    result += "module TypeScript {\r\n" + "    export class SyntaxRewriter implements ISyntaxVisitor {\r\n" + "        public visitToken(token: ISyntaxToken): ISyntaxToken {\r\n" + "            return token;\r\n" + "        }\r\n" + "\r\n" + "        public visitNode(node: SyntaxNode): SyntaxNode {\r\n" + "            return node.accept(this);\r\n" + "        }\r\n" + "\r\n" + "        public visitNodeOrToken(node: ISyntaxNodeOrToken): ISyntaxNodeOrToken {\r\n" + "            return node.isToken() ? <ISyntaxNodeOrToken>this.visitToken(<ISyntaxToken>node) : this.visitNode(<SyntaxNode>node);\r\n" + "        }\r\n" + "\r\n" + "        public visitList(list: ISyntaxList): ISyntaxList {\r\n" + "            var newItems: ISyntaxNodeOrToken[] = null;\r\n" + "\r\n" + "            for (var i = 0, n = list.childCount(); i < n; i++) {\r\n" + "                var item = list.childAt(i);\r\n" + "                var newItem = this.visitNodeOrToken(item);\r\n" + "\r\n" + "                if (item !== newItem && newItems === null) {\r\n" + "                    newItems = [];\r\n" + "                    for (var j = 0; j < i; j++) {\r\n" + "                        newItems.push(list.childAt(j));\r\n" + "                    }\r\n" + "                }\r\n" + "\r\n" + "                if (newItems) {\r\n" + "                    newItems.push(newItem);\r\n" + "                }\r\n" + "            }\r\n" + "\r\n" + "            // Debug.assert(newItems === null || newItems.length === list.childCount());\r\n" + "            return newItems === null ? list : Syntax.list(newItems);\r\n" + "        }\r\n" + "\r\n" + "        public visitSeparatedList(list: ISeparatedSyntaxList): ISeparatedSyntaxList {\r\n" + "            var newItems: ISyntaxNodeOrToken[] = null;\r\n" + "\r\n" + "            for (var i = 0, n = list.childCount(); i < n; i++) {\r\n" + "                var item = list.childAt(i);\r\n" + "                var newItem = item.isToken() ? <ISyntaxNodeOrToken>this.visitToken(<ISyntaxToken>item) : this.visitNode(<SyntaxNode>item);\r\n" + "\r\n" + "                if (item !== newItem && newItems === null) {\r\n" + "                    newItems = [];\r\n" + "                    for (var j = 0; j < i; j++) {\r\n" + "                        newItems.push(list.childAt(j));\r\n" + "                    }\r\n" + "                }\r\n" + "\r\n" + "                if (newItems) {\r\n" + "                    newItems.push(newItem);\r\n" + "                }\r\n" + "            }\r\n" + "\r\n" + "            // Debug.assert(newItems === null || newItems.length === list.childCount());\r\n" + "            return newItems === null ? list : Syntax.separatedList(newItems);\r\n" + "        }\r\n";

    for (var i = 0; i < definitions.length; i++) {
        var definition = definitions[i];
        if (definition.isAbstract) {
            continue;
        }

        result += "\r\n";
        result += "        public visit" + getNameWithoutSuffix(definition) + "(node: " + definition.name + "): any {\r\n";

        if (definition.children.length === 0) {
            result += "            return node;\r\n";
            result += "        }\r\n";
            continue;
        }

        result += "            return node.update(\r\n";

        for (var j = 0; j < definition.children.length; j++) {
            var child = definition.children[j];

            result += "                ";
            if (child.isOptional) {
                result += "node." + child.name + " === null ? null : ";
            }

            if (child.isToken) {
                result += "this.visitToken(node." + child.name + ")";
            } else if (child.isList) {
                result += "this.visitList(node." + child.name + ")";
            } else if (child.isSeparatedList) {
                result += "this.visitSeparatedList(node." + child.name + ")";
            } else if (child.type === "SyntaxKind") {
                result += "node.kind()";
            } else if (isNodeOrToken(child)) {
                result += "<" + child.type + ">this.visitNodeOrToken(node." + child.name + ")";
            } else {
                result += "<" + child.type + ">this.visitNode(node." + child.name + ")";
            }

            if (j < definition.children.length - 1) {
                result += ",\r\n";
            }
        }

        result += ");\r\n";
        result += "        }\r\n";
    }

    result += "    }";
    result += "\r\n}";
    return result;
}

function generateToken(isFixedWidth, leading, trailing) {
    var isVariableWidth = !isFixedWidth;
    var hasAnyTrivia = leading || trailing;

    var result = "    export class ";

    var needsSourcetext = hasAnyTrivia || isVariableWidth;

    var className = isFixedWidth ? "FixedWidthToken" : "VariableWidthToken";
    className += leading && trailing ? "WithLeadingAndTrailingTrivia" : leading && !trailing ? "WithLeadingTrivia" : !leading && trailing ? "WithTrailingTrivia" : "WithNoTrivia";

    result += className;

    result += " implements ISyntaxToken {\r\n";

    if (needsSourcetext) {
        result += "        private _sourceText: ISimpleText;\r\n";
        result += "        private _fullStart: number;\r\n";
    }

    result += "        public tokenKind: SyntaxKind;\r\n";

    if (leading) {
        result += "        private _leadingTriviaInfo: number;\r\n";
    }

    if (isVariableWidth) {
        result += "        private _textOrWidth: any;\r\n";
    }

    if (trailing) {
        result += "        private _trailingTriviaInfo: number;\r\n";
    }

    result += "\r\n";

    if (needsSourcetext) {
        result += "        constructor(sourceText: ISimpleText, fullStart: number,";
    } else {
        result += "        constructor(";
    }

    result += "kind: SyntaxKind";

    if (leading) {
        result += ", leadingTriviaInfo: number";
    }

    if (isVariableWidth) {
        result += ", textOrWidth: any";
    }

    if (trailing) {
        result += ", trailingTriviaInfo: number";
    }

    result += ") {\r\n";

    if (needsSourcetext) {
        result += "            this._sourceText = sourceText;\r\n";
        result += "            this._fullStart = fullStart;\r\n";
    }

    result += "            this.tokenKind = kind;\r\n";

    if (leading) {
        result += "            this._leadingTriviaInfo = leadingTriviaInfo;\r\n";
    }

    if (isVariableWidth) {
        result += "            this._textOrWidth = textOrWidth;\r\n";
    }

    if (trailing) {
        result += "            this._trailingTriviaInfo = trailingTriviaInfo;\r\n";
    }

    result += "        }\r\n\r\n";

    result += "        public clone(): ISyntaxToken {\r\n";
    result += "            return new " + className + "(\r\n";

    if (needsSourcetext) {
        result += "                this._sourceText,\r\n";
        result += "                this._fullStart,\r\n";
    }

    result += "                this.tokenKind";

    if (leading) {
        result += ",\r\n                this._leadingTriviaInfo";
    }

    if (isVariableWidth) {
        result += ",\r\n                this._textOrWidth";
    }

    if (trailing) {
        result += ",\r\n                this._trailingTriviaInfo";
    }

    result += ");\r\n";
    result += "        }\r\n\r\n";

    result += "        public isNode(): boolean { return false; }\r\n" + "        public isToken(): boolean { return true; }\r\n" + "        public isList(): boolean { return false; }\r\n" + "        public isSeparatedList(): boolean { return false; }\r\n\r\n";

    result += "        public kind(): SyntaxKind { return this.tokenKind; }\r\n\r\n";

    result += "        public childCount(): number { return 0; }\r\n";
    result += "        public childAt(index: number): ISyntaxElement { throw Errors.argumentOutOfRange('index'); }\r\n\r\n";

    var leadingTriviaWidth = leading ? "getTriviaWidth(this._leadingTriviaInfo)" : "0";
    var trailingTriviaWidth = trailing ? "getTriviaWidth(this._trailingTriviaInfo)" : "0";

    if (leading && trailing) {
        result += "        public fullWidth(): number { return " + leadingTriviaWidth + " + this.width() + " + trailingTriviaWidth + "; }\r\n";
    } else if (leading) {
        result += "        public fullWidth(): number { return " + leadingTriviaWidth + " + this.width(); }\r\n";
    } else if (trailing) {
        result += "        public fullWidth(): number { return this.width() + " + trailingTriviaWidth + "; }\r\n";
    } else {
        result += "        public fullWidth(): number { return this.width(); }\r\n";
    }

    if (needsSourcetext) {
        if (leading) {
            result += "        private start(): number { return this._fullStart + " + leadingTriviaWidth + "; }\r\n";
        } else {
            result += "        private start(): number { return this._fullStart; }\r\n";
        }

        result += "        private end(): number { return this.start() + this.width(); }\r\n\r\n";
    }

    if (isFixedWidth) {
        result += "        public width(): number { return this.text().length; }\r\n";
    } else {
        result += "        public width(): number { return typeof this._textOrWidth === 'number' ? this._textOrWidth : this._textOrWidth.length; }\r\n";
    }

    if (isFixedWidth) {
        result += "        public text(): string { return SyntaxFacts.getText(this.tokenKind); }\r\n";
    } else {
        result += "\r\n";
        result += "        public text(): string {\r\n";
        result += "            if (typeof this._textOrWidth === 'number') {\r\n";
        result += "                this._textOrWidth = this._sourceText.substr(\r\n";
        result += "                    this.start(), this._textOrWidth, /*intern:*/ this.tokenKind === SyntaxKind.IdentifierName);\r\n";
        result += "            }\r\n";
        result += "\r\n";
        result += "            return this._textOrWidth;\r\n";
        result += "        }\r\n\r\n";
    }

    if (needsSourcetext) {
        result += "        public fullText(): string { return this._sourceText.substr(this._fullStart, this.fullWidth(), /*intern:*/ false); }\r\n\r\n";
    } else {
        result += "        public fullText(): string { return this.text(); }\r\n\r\n";
    }

    if (isFixedWidth) {
        result += "        public value(): any { return value(this); }\r\n";
        result += "        public valueText(): string { return valueText(this); }\r\n";
    } else {
        result += "        public value(): any {\r\n" + "            if ((<any>this)._value === undefined) {\r\n" + "                (<any>this)._value = value(this);\r\n" + "            }\r\n" + "\r\n" + "            return (<any>this)._value;\r\n" + "        }\r\n\r\n";
        result += "        public valueText(): string {\r\n" + "            if ((<any>this)._valueText === undefined) {\r\n" + "                (<any>this)._valueText = valueText(this);\r\n" + "            }\r\n" + "\r\n" + "            return (<any>this)._valueText;\r\n" + "        }\r\n\r\n";
    }

    result += "        public hasLeadingTrivia(): boolean { return " + (leading ? "true" : "false") + "; }\r\n";
    result += "        public hasLeadingComment(): boolean { return " + (leading ? "hasTriviaComment(this._leadingTriviaInfo)" : "false") + "; }\r\n";
    result += "        public hasLeadingNewLine(): boolean { return " + (leading ? "hasTriviaNewLine(this._leadingTriviaInfo)" : "false") + "; }\r\n";
    result += "        public hasLeadingSkippedText(): boolean { return false; }\r\n";
    result += "        public leadingTriviaWidth(): number { return " + (leading ? "getTriviaWidth(this._leadingTriviaInfo)" : "0") + "; }\r\n";
    result += "        public leadingTrivia(): ISyntaxTriviaList { return " + (leading ? "Scanner.scanTrivia(this._sourceText, this._fullStart, getTriviaWidth(this._leadingTriviaInfo), /*isTrailing:*/ false)" : "Syntax.emptyTriviaList") + "; }\r\n\r\n";

    result += "        public hasTrailingTrivia(): boolean { return " + (trailing ? "true" : "false") + "; }\r\n";
    result += "        public hasTrailingComment(): boolean { return " + (trailing ? "hasTriviaComment(this._trailingTriviaInfo)" : "false") + "; }\r\n";
    result += "        public hasTrailingNewLine(): boolean { return " + (trailing ? "hasTriviaNewLine(this._trailingTriviaInfo)" : "false") + "; }\r\n";
    result += "        public hasTrailingSkippedText(): boolean { return false; }\r\n";
    result += "        public trailingTriviaWidth(): number { return " + (trailing ? "getTriviaWidth(this._trailingTriviaInfo)" : "0") + "; }\r\n";
    result += "        public trailingTrivia(): ISyntaxTriviaList { return " + (trailing ? "Scanner.scanTrivia(this._sourceText, this.end(), getTriviaWidth(this._trailingTriviaInfo), /*isTrailing:*/ true)" : "Syntax.emptyTriviaList") + "; }\r\n\r\n";
    result += "        public hasSkippedToken(): boolean { return false; }\r\n";

    result += "        public toJSON(key) { return tokenToJSON(this); }\r\n" + "        public firstToken(): ISyntaxToken { return this; }\r\n" + "        public lastToken(): ISyntaxToken { return this; }\r\n" + "        public isTypeScriptSpecific(): boolean { return false; }\r\n" + "        public isIncrementallyUnusable(): boolean { return this.fullWidth() === 0 || SyntaxFacts.isAnyDivideOrRegularExpressionToken(this.tokenKind); }\r\n" + "        public accept(visitor: ISyntaxVisitor): any { return visitor.visitToken(this); }\r\n" + "        private realize(): ISyntaxToken { return realizeToken(this); }\r\n" + "        public collectTextElements(elements: string[]): void { collectTokenTextElements(this, elements); }\r\n\r\n";

    result += "        private findTokenInternal(parent: PositionedElement, position: number, fullStart: number): PositionedToken {\r\n" + "            return new PositionedToken(parent, this, fullStart);\r\n" + "        }\r\n\r\n";

    result += "        public withLeadingTrivia(leadingTrivia: ISyntaxTriviaList): ISyntaxToken {\r\n" + "            return this.realize().withLeadingTrivia(leadingTrivia);\r\n" + "        }\r\n" + "\r\n" + "        public withTrailingTrivia(trailingTrivia: ISyntaxTriviaList): ISyntaxToken {\r\n" + "            return this.realize().withTrailingTrivia(trailingTrivia);\r\n" + "        }\r\n";

    result += "    }\r\n";

    return result;
}

function generateTokens() {
    var result = "///<reference path='references.ts' />\r\n" + "\r\n" + "module TypeScript.Syntax {\r\n";

    result += generateToken(false, false, false);
    result += "\r\n";
    result += generateToken(false, true, false);
    result += "\r\n";
    result += generateToken(false, false, true);
    result += "\r\n";
    result += generateToken(false, true, true);
    result += "\r\n";

    result += generateToken(true, false, false);
    result += "\r\n";
    result += generateToken(true, true, false);
    result += "\r\n";
    result += generateToken(true, false, true);
    result += "\r\n";
    result += generateToken(true, true, true);
    result += "\r\n";

    result += "    function collectTokenTextElements(token: ISyntaxToken, elements: string[]): void {\r\n" + "        token.leadingTrivia().collectTextElements(elements);\r\n" + "        elements.push(token.text());\r\n" + "        token.trailingTrivia().collectTextElements(elements);\r\n" + "    }\r\n" + "\r\n" + "    export function fixedWidthToken(sourceText: ISimpleText, fullStart: number,\r\n" + "        kind: SyntaxKind,\r\n" + "        leadingTriviaInfo: number,\r\n" + "        trailingTriviaInfo: number): ISyntaxToken {\r\n" + "\r\n" + "        if (leadingTriviaInfo === 0) {\r\n" + "            if (trailingTriviaInfo === 0) {\r\n" + "                return new FixedWidthTokenWithNoTrivia(kind);\r\n" + "            }\r\n" + "            else {\r\n" + "                return new FixedWidthTokenWithTrailingTrivia(sourceText, fullStart, kind, trailingTriviaInfo);\r\n" + "            }\r\n" + "        }\r\n" + "        else if (trailingTriviaInfo === 0) {\r\n" + "            return new FixedWidthTokenWithLeadingTrivia(sourceText, fullStart, kind, leadingTriviaInfo);\r\n" + "        }\r\n" + "        else {\r\n" + "            return new FixedWidthTokenWithLeadingAndTrailingTrivia(sourceText, fullStart, kind, leadingTriviaInfo, trailingTriviaInfo);\r\n" + "        }\r\n" + "    }\r\n" + "\r\n" + "    export function variableWidthToken(sourceText: ISimpleText, fullStart: number,\r\n" + "        kind: SyntaxKind,\r\n" + "        leadingTriviaInfo: number,\r\n" + "        width: number,\r\n" + "        trailingTriviaInfo: number): ISyntaxToken {\r\n" + "\r\n" + "        if (leadingTriviaInfo === 0) {\r\n" + "            if (trailingTriviaInfo === 0) {\r\n" + "                return new VariableWidthTokenWithNoTrivia(sourceText, fullStart, kind, width);\r\n" + "            }\r\n" + "            else {\r\n" + "                return new VariableWidthTokenWithTrailingTrivia(sourceText, fullStart, kind, width, trailingTriviaInfo);\r\n" + "            }\r\n" + "        }\r\n" + "        else if (trailingTriviaInfo === 0) {\r\n" + "            return new VariableWidthTokenWithLeadingTrivia(sourceText, fullStart, kind, leadingTriviaInfo, width);\r\n" + "        }\r\n" + "        else {\r\n" + "            return new VariableWidthTokenWithLeadingAndTrailingTrivia(sourceText, fullStart, kind, leadingTriviaInfo, width, trailingTriviaInfo);\r\n" + "        }\r\n" + "    }\r\n\r\n";

    result += "    function getTriviaWidth(value: number): number {\r\n" + "        return value >>> SyntaxConstants.TriviaFullWidthShift;\r\n" + "    }\r\n" + "\r\n" + "    function hasTriviaComment(value: number): boolean {\r\n" + "        return (value & SyntaxConstants.TriviaCommentMask) !== 0;\r\n" + "    }\r\n" + "\r\n" + "    function hasTriviaNewLine(value: number): boolean {\r\n" + "        return (value & SyntaxConstants.TriviaNewLineMask) !== 0;\r\n" + "    }\r\n";

    result += "}";

    return result;
}

function generateWalker() {
    var result = "";

    result += "///<reference path='references.ts' />\r\n" + "\r\n" + "module TypeScript {\r\n" + "    export class SyntaxWalker implements ISyntaxVisitor {\r\n" + "        public visitToken(token: ISyntaxToken): void {\r\n" + "        }\r\n" + "\r\n" + "        public visitNode(node: SyntaxNode): void {\r\n" + "            node.accept(this);\r\n" + "        }\r\n" + "\r\n" + "        public visitNodeOrToken(nodeOrToken: ISyntaxNodeOrToken): void {\r\n" + "            if (nodeOrToken.isToken()) { \r\n" + "                this.visitToken(<ISyntaxToken>nodeOrToken);\r\n" + "            }\r\n" + "            else {\r\n" + "                this.visitNode(<SyntaxNode>nodeOrToken);\r\n" + "            }\r\n" + "        }\r\n" + "\r\n" + "        private visitOptionalToken(token: ISyntaxToken): void {\r\n" + "            if (token === null) {\r\n" + "                return;\r\n" + "            }\r\n" + "\r\n" + "            this.visitToken(token);\r\n" + "        }\r\n" + "\r\n" + "        public visitOptionalNode(node: SyntaxNode): void {\r\n" + "            if (node === null) {\r\n" + "                return;\r\n" + "            }\r\n" + "\r\n" + "            this.visitNode(node);\r\n" + "        }\r\n" + "\r\n" + "        public visitOptionalNodeOrToken(nodeOrToken: ISyntaxNodeOrToken): void {\r\n" + "            if (nodeOrToken === null) {\r\n" + "                return;\r\n" + "            }\r\n" + "\r\n" + "            this.visitNodeOrToken(nodeOrToken);\r\n" + "        }\r\n" + "\r\n" + "        public visitList(list: ISyntaxList): void {\r\n" + "            for (var i = 0, n = list.childCount(); i < n; i++) {\r\n" + "               this.visitNodeOrToken(list.childAt(i));\r\n" + "            }\r\n" + "        }\r\n" + "\r\n" + "        public visitSeparatedList(list: ISeparatedSyntaxList): void {\r\n" + "            for (var i = 0, n = list.childCount(); i < n; i++) {\r\n" + "                var item = list.childAt(i);\r\n" + "                this.visitNodeOrToken(item);\r\n" + "            }\r\n" + "        }\r\n";

    for (var i = 0; i < definitions.length; i++) {
        var definition = definitions[i];
        if (definition.isAbstract) {
            continue;
        }

        result += "\r\n";
        result += "        public visit" + getNameWithoutSuffix(definition) + "(node: " + definition.name + "): void {\r\n";

        for (var j = 0; j < definition.children.length; j++) {
            var child = definition.children[j];

            if (child.isToken) {
                if (child.isOptional) {
                    result += "            this.visitOptionalToken(node." + child.name + ");\r\n";
                } else {
                    result += "            this.visitToken(node." + child.name + ");\r\n";
                }
            } else if (child.isList) {
                result += "            this.visitList(node." + child.name + ");\r\n";
            } else if (child.isSeparatedList) {
                result += "            this.visitSeparatedList(node." + child.name + ");\r\n";
            } else if (isNodeOrToken(child)) {
                if (child.isOptional) {
                    result += "            this.visitOptionalNodeOrToken(node." + child.name + ");\r\n";
                } else {
                    result += "            this.visitNodeOrToken(node." + child.name + ");\r\n";
                }
            } else if (child.type !== "SyntaxKind") {
                if (child.isOptional) {
                    result += "            this.visitOptionalNode(node." + child.name + ");\r\n";
                } else {
                    result += "            this.visitNode(node." + child.name + ");\r\n";
                }
            }
        }

        result += "        }\r\n";
    }

    result += "    }";
    result += "\r\n}";
    return result;
}

function firstEnumName(e, value) {
    for (var name in e) {
        if (e[name] === value) {
            return name;
        }
    }
}

function generateKeywordCondition(keywords, currentCharacter, indent) {
    var length = keywords[0].text.length;

    var result = "";
    var index;

    if (keywords.length === 1) {
        var keyword = keywords[0];

        if (currentCharacter === length) {
            return indent + "return SyntaxKind." + firstEnumName(TypeScript.SyntaxKind, keyword.kind) + ";\r\n";
        }

        var keywordText = keywords[0].text;
        result = indent + "return (";

        for (var i = currentCharacter; i < length; i++) {
            if (i > currentCharacter) {
                result += " && ";
            }

            index = i === 0 ? "startIndex" : ("startIndex + " + i);
            result += "array[" + index + "] === CharacterCodes." + keywordText.substr(i, 1);
        }

        result += ") ? SyntaxKind." + firstEnumName(TypeScript.SyntaxKind, keyword.kind) + " : SyntaxKind.IdentifierName;\r\n";
    } else {
        index = currentCharacter === 0 ? "startIndex" : ("startIndex + " + currentCharacter);
        result += indent + "switch(array[" + index + "]) {\r\n";

        var groupedKeywords = TypeScript.ArrayUtilities.groupBy(keywords, function (k) {
            return k.text.substr(currentCharacter, 1);
        });

        for (var c in groupedKeywords) {
            if (groupedKeywords.hasOwnProperty(c)) {
                result += indent + "case CharacterCodes." + c + ":\r\n";
                result += indent + "    // " + TypeScript.ArrayUtilities.select(groupedKeywords[c], function (k) {
                    return k.text;
                }).join(", ") + "\r\n";
                result += generateKeywordCondition(groupedKeywords[c], currentCharacter + 1, indent + "    ");
            }
        }

        result += indent + "default:\r\n";
        result += indent + "    return SyntaxKind.IdentifierName;\r\n";
        result += indent + "}\r\n\r\n";
    }

    return result;
}

function generateScannerUtilities() {
    var result = "///<reference path='references.ts' />\r\n" + "\r\n" + "module TypeScript {\r\n" + "    export class ScannerUtilities {\r\n";

    var i;
    var keywords = [];

    for (i = 15 /* FirstKeyword */; i <= 70 /* LastKeyword */; i++) {
        keywords.push({ kind: i, text: TypeScript.SyntaxFacts.getText(i) });
    }

    result += "        public static identifierKind(array: number[], startIndex: number, length: number): SyntaxKind {\r\n";

    var minTokenLength = TypeScript.ArrayUtilities.min(keywords, function (k) {
        return k.text.length;
    });
    var maxTokenLength = TypeScript.ArrayUtilities.max(keywords, function (k) {
        return k.text.length;
    });
    result += "            switch (length) {\r\n";

    for (i = minTokenLength; i <= maxTokenLength; i++) {
        var keywordsOfLengthI = TypeScript.ArrayUtilities.where(keywords, function (k) {
            return k.text.length === i;
        });
        if (keywordsOfLengthI.length > 0) {
            result += "            case " + i + ":\r\n";
            result += "                // " + TypeScript.ArrayUtilities.select(keywordsOfLengthI, function (k) {
                return k.text;
            }).join(", ") + "\r\n";

            result += generateKeywordCondition(keywordsOfLengthI, 0, "            ");
        }
    }

    result += "            default:\r\n";
    result += "                return SyntaxKind.IdentifierName;\r\n";
    result += "            }\r\n";
    result += "        }\r\n";

    result += "    }\r\n";
    result += "}";

    return result;
}

function generateVisitor() {
    var i;
    var definition;
    var result = "";

    result += "///<reference path='references.ts' />\r\n\r\n";

    result += "module TypeScript {\r\n";
    result += "    export interface ISyntaxVisitor {\r\n";
    result += "        visitToken(token: ISyntaxToken): any;\r\n";

    for (i = 0; i < definitions.length; i++) {
        definition = definitions[i];
        if (!definition.isAbstract) {
            result += "        visit" + getNameWithoutSuffix(definition) + "(node: " + definition.name + "): any;\r\n";
        }
    }

    result += "    }\r\n\r\n";

    if (!forPrettyPrinter) {
        result += "    export class SyntaxVisitor implements ISyntaxVisitor {\r\n";
        result += "        public defaultVisit(node: ISyntaxNodeOrToken): any {\r\n";
        result += "            return null;\r\n";
        result += "        }\r\n";
        result += "\r\n";
        result += "        public visitToken(token: ISyntaxToken): any {\r\n";
        result += "            return this.defaultVisit(token);\r\n";
        result += "        }\r\n";

        for (i = 0; i < definitions.length; i++) {
            definition = definitions[i];

            if (!definition.isAbstract) {
                result += "\r\n        public visit" + getNameWithoutSuffix(definition) + "(node: " + definition.name + "): any {\r\n";
                result += "            return this.defaultVisit(node);\r\n";
                result += "        }\r\n";
            }
        }

        result += "    }";
    }

    result += "\r\n}";

    return result;
}

function generateFactory() {
    var result = "///<reference path='references.ts' />\r\n";

    result += "\r\nmodule TypeScript.Syntax {\r\n";
    result += "    export interface IFactory {\r\n";

    var i;
    var j;
    var definition;
    var child;

    for (i = 0; i < definitions.length; i++) {
        definition = definitions[i];
        if (definition.isAbstract) {
            continue;
        }
        result += "        " + camelCase(getNameWithoutSuffix(definition)) + "(";

        for (j = 0; j < definition.children.length; j++) {
            if (j > 0) {
                result += ", ";
            }

            child = definition.children[j];
            result += child.name + ": " + getType(child);
        }

        result += "): " + definition.name + ";\r\n";
    }

    result += "    }\r\n\r\n";

    result += "    export class NormalModeFactory implements IFactory {\r\n";

    for (i = 0; i < definitions.length; i++) {
        definition = definitions[i];
        if (definition.isAbstract) {
            continue;
        }
        result += "        " + camelCase(getNameWithoutSuffix(definition)) + "(";

        for (j = 0; j < definition.children.length; j++) {
            if (j > 0) {
                result += ", ";
            }

            child = definition.children[j];
            result += getSafeName(child) + ": " + getType(child);
        }

        result += "): " + definition.name + " {\r\n";
        result += "            return new " + definition.name + "(";

        for (j = 0; j < definition.children.length; j++) {
            child = definition.children[j];
            result += getSafeName(child);
            result += ", ";
        }

        result += "/*parsedInStrictMode:*/ false);\r\n";
        result += "        }\r\n";
    }

    result += "    }\r\n\r\n";

    result += "    export class StrictModeFactory implements IFactory {\r\n";

    for (i = 0; i < definitions.length; i++) {
        definition = definitions[i];
        if (definition.isAbstract) {
            continue;
        }
        result += "        " + camelCase(getNameWithoutSuffix(definition)) + "(";

        for (j = 0; j < definition.children.length; j++) {
            if (j > 0) {
                result += ", ";
            }

            child = definition.children[j];
            result += getSafeName(child) + ": " + getType(child);
        }

        result += "): " + definition.name + " {\r\n";
        result += "            return new " + definition.name + "(";

        for (j = 0; j < definition.children.length; j++) {
            child = definition.children[j];
            result += getSafeName(child);
            result += ", ";
        }

        result += "/*parsedInStrictMode:*/ true);\r\n";

        result += "        }\r\n";
    }

    result += "    }\r\n\r\n";

    result += "    export var normalModeFactory: IFactory = new NormalModeFactory();\r\n";
    result += "    export var strictModeFactory: IFactory = new StrictModeFactory();\r\n";
    result += "}";

    return result;
}

var syntaxNodes = generateNodes();
var rewriter = generateRewriter();
var tokens = generateTokens();
var walker = generateWalker();
var scannerUtilities = generateScannerUtilities();
var visitor = generateVisitor();
var factory = generateFactory();

Environment.writeFile(Environment.currentDirectory() + "\\src\\compiler\\syntax\\syntaxNodes.generated.ts", syntaxNodes, false);
Environment.writeFile(Environment.currentDirectory() + "\\src\\compiler\\syntax\\syntaxRewriter.generated.ts", rewriter, false);
Environment.writeFile(Environment.currentDirectory() + "\\src\\compiler\\syntax\\syntaxToken.generated.ts", tokens, false);
Environment.writeFile(Environment.currentDirectory() + "\\src\\compiler\\syntax\\syntaxWalker.generated.ts", walker, false);
Environment.writeFile(Environment.currentDirectory() + "\\src\\compiler\\syntax\\scannerUtilities.generated.ts", scannerUtilities, false);
Environment.writeFile(Environment.currentDirectory() + "\\src\\compiler\\syntax\\syntaxVisitor.generated.ts", visitor, false);
Environment.writeFile(Environment.currentDirectory() + "\\src\\compiler\\syntax\\syntaxFactory.generated.ts", factory, false);
