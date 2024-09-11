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
//AdminZonal
$(document).ready(function () {
    var a = $("#datatable-admzonal").DataTable({
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
    a.buttons().container().appendTo("#datatable-admzonal_wrapper .col-md-6:eq(0)");
    $(".dataTables_length select").addClass("form-select form-select-sm");
});
//Agente de Compra
$(document).ready(function () {
    var a = $("#datatable-agentcompra").DataTable({
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
    a.buttons().container().appendTo("#datatable-agentcompra_wrapper .col-md-6:eq(0)");
    $(".dataTables_length select").addClass("form-select form-select-sm");
});
//Importador
$(document).ready(function () {
    var a = $("#datatable-importador").DataTable({
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
    a.buttons().container().appendTo("#datatable-importador_wrapper .col-md-6:eq(0)");
    $(".dataTables_length select").addClass("form-select form-select-sm");
});