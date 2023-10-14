$( document ).ready(function() { 
    $(window).scroll(function() { 
        var Scroll = $(window).scrollTop() + 1,
            projectOffset = $('#project-content-link').offset().top,
            funcionalitiOffset = $('#functionalities-content-link').offset().top,
            objectiveOffset = $("#objective-content-link").offset().top,
            feedbackOffset = $("#feedback-content-link").offset().top;

        if (Scroll >= projectOffset) { 
            $("#project-icon").attr("class", "bi bi-house-gear nav-icone active-link");
            $("#project-title").addClass("active-link"); 
        } else { 
            $("#project-icon").attr("class", "bi bi-house-gear nav-icone");
            $("#project-title").removeClass("active-link");
        }
        if (Scroll >= funcionalitiOffset) { 
            $("#funcionalities-icon").attr("class", "bi bi-house-gear nav-icone active-link");
            $("#funcionalities-title").addClass("active-link");
            $("#project-icon").attr("class", "bi bi-house-gear nav-icone");
            $("#project-title").removeClass("active-link");
        } else { 
            $("#funcionalities-icon").attr("class", "bi bi-house-gear nav-icone");
            $("#funcionalities-title").removeClass("active-link");
        }

        if (Scroll >= objectiveOffset) { 
            $("#objective-icon").attr("class", "bi bi-house-gear nav-icone active-link");
            $("#objective-title").addClass("active-link");
            $("#funcionalities-icon").attr("class", "bi bi-house-gear nav-icone");
            $("#funcionalities-title").removeClass("active-link"); 
        } else { 
            $("#objective-icon").attr("class", "bi bi-house-gear nav-icone");
            $("#objective-title").removeClass("active-link");
        }
        if (Scroll >= feedbackOffset) { 
            $("#feedback-icon").attr("class", "bi bi-house-gear nav-icone active-link");
            $("#feedback-text").addClass("active-link");
            $("#objective-icon").attr("class", "bi bi-house-gear nav-icone");
            $("#objective-title").removeClass("active-link");
        } else { 
            $("#feedback-icon").attr("class", "bi bi-house-gear nav-icone");
            $("#feedback-text").removeClass("active-link");
        }
    });
});