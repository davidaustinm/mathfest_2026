#############################################################################
# This macro library supports WeBWorK problems from the PreTeXt project named
# Asking good questions
#############################################################################


# Return a string containing the latex-image-preamble contents.
# To be used by LaTeXImage objects as in:
# $image->addToPreamble(latexImagePreamble())

sub latexImagePreamble {
return <<'END_LATEX_IMAGE_PREAMBLE'
\usepackage{tikz}

END_LATEX_IMAGE_PREAMBLE
}
