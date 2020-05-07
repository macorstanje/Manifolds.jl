using Documenter, ManifoldDiffusions

# include("../src/ManifoldDiffusions.jl")
# using ManifoldDiffusions

makedocs(
    modules = [ManifoldDiffusions],
    sitename = "ManifoldDiffusions.jl",
    authors = "Marc Corstanje and contributors",
    doctest = false,
    format = :html,
    pages = Any[ # Compat: `Any` for 0.4 compat
    "Home" => "index.md",
    "Manual" => "manual.md",
    "Library" => Any[
        "Basics" => "library/basics.md",
        "Geodesics" => "library/geodesics.md",
        "Frames and the frame bundle" => "library/frames.md",
        "Plots on Manifolds" => "library/manifoldplots.md"
        ]
    ]
)

deploydocs(
    repo = "github.com/macorstanje/ManifoldDiffusions.jl.git",
    branch = "gh-pages",
    deps=nothing,
    make=nothing
)
