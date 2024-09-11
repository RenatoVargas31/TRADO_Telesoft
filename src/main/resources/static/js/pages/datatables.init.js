$(document).ready(function () {
    $("#datatable").DataTable({
        language: {
            paginate: {
                previous: "<i class='mdi mdi-chevron-left'>",
                next: "<i class='mdi mdi-chevron-right'>"
            }
        },
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
        }
    });
});
$(document).ready(function () {
    var a = $("#datatable-buttons").DataTable({
        lengthChange: !1,
        language: {paginate: {previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>"}},
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        },
        buttons: ["copy", "excel", "pdf", "colvis"]
    });
    a.buttons().container().appendTo("#datatable-buttons_wrapper .col-md-6:eq(0)");
    $(".dataTables_length select").addClass("form-select form-select-sm");
});
//DATATABLES - SUPERADMIN
//AdminZonal - Inicio
$(document).ready(function () {
    var a = $("#datatable-admzonal-inicio").DataTable({
        lengthChange: !1,
        pageLength: 5,
        info: !1,
        language: {paginate: {previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>"}},
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        },
        buttons: ["print", "excel", "pdf", "csv"],
        columnDefs: [
            { targets: -1, searchable: false } // Deshabilitar búsqueda en la última columna
        ]
    });
    a.buttons().container().appendTo("#datatable-admzonal-inicio_wrapper .col-md-6:eq(0)");
    $(".dataTables_length select").addClass("form-select form-select-sm");
});
//Agente de Compra - Inicio
$(document).ready(function () {
    var a = $("#datatable-agentcompra-inicio").DataTable({
        lengthChange: !1,
        pageLength: 5,
        info: !1,
        language: {paginate: {previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>"}},
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        },
        buttons: ["print", "excel", "pdf", "csv"],
        columnDefs: [
            { targets: -1, searchable: false } // Deshabilitar búsqueda en la última columna
        ]
    });
    a.buttons().container().appendTo("#datatable-agentcompra-inicio_wrapper .col-md-6:eq(0)");
    $(".dataTables_length select").addClass("form-select form-select-sm");
});
//Importador - Inicio
$(document).ready(function () {
    var a = $("#datatable-importador-inicio").DataTable({
        lengthChange: !1,
        pageLength: 5,
        info: !1,
        language: {paginate: {previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>"}},
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        },
        buttons: ["print", "excel", "pdf", "csv"],
        columnDefs: [
            { targets: -1, searchable: false } // Deshabilitar búsqueda en la última columna
        ]
    });
    a.buttons().container().appendTo("#datatable-importador-inicio_wrapper .col-md-6:eq(0)");
    $(".dataTables_length select").addClass("form-select form-select-sm");
});
//AdminZonal - Activos/Inactivos
$(document).ready(function () {
    var a = $("#datatable-admzonal-activo").DataTable({
        lengthChange: !1,
        pageLength: 7,
        info: !1,
        language: {paginate: {previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>"}},
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        },
        buttons: ["print", "excel", "pdf", "csv"],
        columnDefs: [
            { targets: -1, searchable: false } // Deshabilitar búsqueda en la última columna
        ]
    });
    a.buttons().container().appendTo("#datatable-admzonal-activo_wrapper .col-md-6:eq(0)");
    $(".dataTables_length select").addClass("form-select form-select-sm");
});
$(document).ready(function () {
    var a = $("#datatable-admzonal-inactivo").DataTable({
        lengthChange: !1,
        pageLength: 7,
        info: !1,
        language: {paginate: {previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>"}},
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        },
        buttons: ["print", "excel", "pdf", "csv"],
        columnDefs: [
            { targets: -1, searchable: false } // Deshabilitar búsqueda en la última columna
        ]
    });
    a.buttons().container().appendTo("#datatable-admzonal-inactivo_wrapper .col-md-6:eq(0)");
    $(".dataTables_length select").addClass("form-select form-select-sm");
});
//Agente de Compra - Postula/Activos/Inactivos
$(document).ready(function () {
    var a = $("#datatable-agentcompra-postula").DataTable({
        lengthChange: !1,
        pageLength: 7,
        info: !1,
        language: {paginate: {previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>"}},
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        },
        buttons: ["print", "excel", "pdf", "csv"],
        columnDefs: [
            { targets: -1, searchable: false } // Deshabilitar búsqueda en la última columna
        ]
    });
    a.buttons().container().appendTo("#datatable-agentcompra-postula_wrapper .col-md-6:eq(0)");
    $(".dataTables_length select").addClass("form-select form-select-sm");
});
$(document).ready(function () {
    var a = $("#datatable-agentcompra-activo").DataTable({
        lengthChange: !1,
        pageLength: 7,
        info: !1,
        language: {paginate: {previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>"}},
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        },
        buttons: ["print", "excel", "pdf", "csv"],
        columnDefs: [
            { targets: -1, searchable: false } // Deshabilitar búsqueda en la última columna
        ]
    });
    a.buttons().container().appendTo("#datatable-agentcompra-activo_wrapper .col-md-6:eq(0)");
    $(".dataTables_length select").addClass("form-select form-select-sm");
});
$(document).ready(function () {
    var a = $("#datatable-agentcompra-inactivo").DataTable({
        lengthChange: !1,
        pageLength: 5,
        info: !1,
        language: {paginate: {previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>"}},
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        },
        buttons: ["print", "excel", "pdf", "csv"],
        columnDefs: [
            { targets: -1, searchable: false } // Deshabilitar búsqueda en la última columna
        ]
    });
    a.buttons().container().appendTo("#datatable-agentcompra-inactivo_wrapper .col-md-6:eq(0)");
    $(".dataTables_length select").addClass("form-select form-select-sm");
});
//Importador - Solicitud/Activos/Inactivos
$(document).ready(function () {
    var a = $("#datatable-importador-solicitud").DataTable({
        lengthChange: !1,
        pageLength: 7,
        info: !1,
        language: {paginate: {previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>"}},
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        },
        buttons: ["print", "excel", "pdf", "csv"],
        columnDefs: [
            { targets: -1, searchable: false } // Deshabilitar búsqueda en la última columna
        ]
    });
    a.buttons().container().appendTo("#datatable-importador-solicitud_wrapper .col-md-6:eq(0)");
    $(".dataTables_length select").addClass("form-select form-select-sm");
});
$(document).ready(function () {
    var a = $("#datatable-importador-activo").DataTable({
        lengthChange: !1,
        pageLength: 7,
        info: !1,
        language: {paginate: {previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>"}},
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        },
        buttons: ["print", "excel", "pdf", "csv"],
        columnDefs: [
            { targets: -1, searchable: false } // Deshabilitar búsqueda en la última columna
        ]
    });
    a.buttons().container().appendTo("#datatable-importador-activo_wrapper .col-md-6:eq(0)");
    $(".dataTables_length select").addClass("form-select form-select-sm");
});
$(document).ready(function () {
    var a = $("#datatable-importador-inactivo").DataTable({
        lengthChange: !1,
        pageLength: 7,
        info: !1,
        language: {paginate: {previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>"}},
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        },
        buttons: ["print", "excel", "pdf", "csv"],
        columnDefs: [
            { targets: -1, searchable: false } // Deshabilitar búsqueda en la última columna
        ]
    });
    a.buttons().container().appendTo("#datatable-importador-inactivo_wrapper .col-md-6:eq(0)");
    $(".dataTables_length select").addClass("form-select form-select-sm");
});
//Productos - Reposiciones
$(document).ready(function () {
    var a = $("#datatable-producto-repo").DataTable({
        lengthChange: !1,
        pageLength: 7,
        info: !1,
        language: {paginate: {previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>"}},
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        },
        buttons: ["print", "excel", "pdf", "csv"],
        columnDefs: [
            { targets: -1, searchable: false } // Deshabilitar búsqueda en la última columna
        ]
    });
    a.buttons().container().appendTo("#datatable-producto-repo_wrapper .col-md-6:eq(0)");
    $(".dataTables_length select").addClass("form-select form-select-sm");
});
//Productos - Listado
$(document).ready(function () {
    var a = $("#datatable-producto-lista").DataTable({
        lengthChange: !1,
        pageLength: 7,
        info: !1,
        language: {paginate: {previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>"}},
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        },
        buttons: ["print", "excel", "pdf", "csv"],
        columnDefs: [
            { targets: -1, searchable: false } // Deshabilitar búsqueda en la última columna
        ]
    });
    a.buttons().container().appendTo("#datatable-producto-lista_wrapper .col-md-6:eq(0)");
    $(".dataTables_length select").addClass("form-select form-select-sm");
});
//Proveedores - Listado
$(document).ready(function () {
    var a = $("#datatable-proveedor-lista").DataTable({
        lengthChange: !1,
        pageLength: 7,
        info: !1,
        language: {paginate: {previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>"}},
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        },
        buttons: ["print", "excel", "pdf", "csv"],
        columnDefs: [
            { targets: -1, searchable: false } // Deshabilitar búsqueda en la última columna
        ]
    });
    a.buttons().container().appendTo("#datatable-proveedor-lista_wrapper .col-md-6:eq(0)");
    $(".dataTables_length select").addClass("form-select form-select-sm");
});