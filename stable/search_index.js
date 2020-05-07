var documenterSearchIndex = {"docs":
[{"location":"library/basics/#Various-manifolds-and-basic-functions-1","page":"Basics","title":"Various manifolds and basic functions","text":"","category":"section"},{"location":"library/basics/#","page":"Basics","title":"Basics","text":"CurrentModule = Manifolds","category":"page"},{"location":"library/basics/#","page":"Basics","title":"Basics","text":"Manifold\nEmbeddedManifold\nTangentVector\nEllipse\nSphere\nTorus\nParaboloid\ng\nΓ","category":"page"},{"location":"library/basics/#Main.Manifolds.Manifold","page":"Basics","title":"Main.Manifolds.Manifold","text":"Manifold\n\nAbstract (super-)type under which all speficic manifolds fall\n\n\n\n\n\n","category":"type"},{"location":"library/basics/#Main.Manifolds.EmbeddedManifold","page":"Basics","title":"Main.Manifolds.EmbeddedManifold","text":"EmbeddedManifold <: Manifold\n\nEmbeddedManifold creates a manifold ℳ = f^{-1}({0}) of dimension d=N-n where f should be a smooth function ℝ^N  ℝ^n. An EmbeddedManifold ℳ equipped with functions f( , ℳ), P( , ℳ) and F( , ℳ). Here f is such that f(q, ℳ)=0 when qℳ, P(q, ℳ) is the projection matrix ℝ^NT_qℳ given by I-n(q)n(q)^T, where n(q)=f(q)f(q). F(q, ℳ) is the transformation from local coordinates q to global coordinates in ℝ^N.\n\n\n\n\n\n","category":"type"},{"location":"library/basics/#Main.Manifolds.TangentVector","page":"Basics","title":"Main.Manifolds.TangentVector","text":"TangentVector{T, TM}\n\nElements of 𝑇ₓℳ and some vector-space operations.\n\n\n\n\n\n","category":"type"},{"location":"library/basics/#Main.Manifolds.Ellipse","page":"Basics","title":"Main.Manifolds.Ellipse","text":"Ellipse{T<:Real} <: EmbeddedManifold\n\nSettings for an ellipse as subset of ℝ². Elements satisfy (xa)^2 + (yb)^2 = 1. For an object 𝔼 = Ellipse(a, b), we have\n\nf(q mathcal𝔼) = left(fracq_1aright)^2 + left(fracq_2bright)^2 - 1\nF(q 𝔼) = beginpmatrix acos q  b sin qendpmatrix\n\nExample: Generate a unit circle\n\njulia> 𝔼 = Ellipse(1.0, 1.0)\n\n\n\n\n\n","category":"type"},{"location":"library/basics/#Main.Manifolds.Sphere","page":"Basics","title":"Main.Manifolds.Sphere","text":"Sphere{T<:Real} <: EmbeddedManifold\n\nSettings for the sphere 𝕊². Call Sphere(R) to generate a sphere with radius R<:Real. Elements satisfy x^2+y^2+z^2=R^2. The local coordinates are modelled via a stereograpgical projection.\n\nFor a Sphere 𝕊 = Sphere(R), we have\n\nf(q 𝕊) = q_1^2+q_2^2-R^2\nF(q 𝕊) = beginpmatrix frac2q_1q_1^2+q_2^2+1  frac2q_2q_1^2+q_2^2+1  fracq_1^2+q_2^2-1q_1^2+q_2^2+1 endpmatrix\n\nExample: Generate a unit sphere\n\njulia> 𝕊 = Sphere(1.0)\n\n\n\n\n\n","category":"type"},{"location":"library/basics/#Main.Manifolds.Torus","page":"Basics","title":"Main.Manifolds.Torus","text":"Torus{T<:Real} <: EmbeddedManifold\n\nSettings for the torus 𝕋² with inner radius r and outer radius R. Call Torus(R,r) to generate a torus with inner radius r<:Real and outer radius R<:Real. Elements satisfy (x^2+y^2+z^2+R^2-r^2)^2=4R^2(x^2+y^2).\n\nFor a Torus 𝕋 = Torus(R, r), we have\n\n``f(q, 𝕋) =\n\nExample: Generate a torus with R=3 and r=1\n\njulia> 𝕋 = Torus(3.0, 1.0)\n\n\n\n\n\n","category":"type"},{"location":"library/basics/#Main.Manifolds.Paraboloid","page":"Basics","title":"Main.Manifolds.Paraboloid","text":"Paraboloid{T<:Real} <: EmbeddedManifold\n\nSettings for the Paraboloid. Call Paraboloid(a,b) to generate a paraboloid with parameters a<:Real and outer radius b<:Real. Elements satisfy (xa)^2+(yb)^2 = z.\n\nExample: Generate a torus with a=0 and b=1\n\njulia> ℙ = Parabolod(3.0, 1.0)\n\n\n\n\n\n","category":"type"},{"location":"library/basics/#Main.Manifolds.g","page":"Basics","title":"Main.Manifolds.g","text":"g(q::T, ℳ::TM) where {T<:Union{AbstractArray, Real}, TM<:EmbeddedManifold}\n\nIf ℳ<:EmbeddedManifold is given in local coordinates Fℝ^d  ℝ^N, we obtain a Riemannian metric. g(q, ℳ) returns the matrix mathrmdF^TmathrmdF, where mathrmdF denotes the Jacobian matrix for F in q<:Union{AbstractArray, Real}.\n\n\n\n\n\n","category":"function"},{"location":"library/basics/#Main.Manifolds.Γ","page":"Basics","title":"Main.Manifolds.Γ","text":"Γ(q::T, ℳ::TM) where {T<:Union{AbstractArray, Real}, TM<:EmbeddedManifold}\n\nIf ℳ<:EmbeddedManifold is given in local coordinates Fℝ^d  ℝ^N, we obtain Christoffel symbols Γ^i_jk for the Levi-Civita connection\n\nIn local coordinates q, Γ(q, ℳ) returns a matrix of size ddd where the element [i,j,k] corresponds to Γ^i_jk.\n\n\n\n\n\n","category":"function"},{"location":"manual/#Manual-1","page":"Manual","title":"Manual","text":"","category":"section"},{"location":"manual/#","page":"Manual","title":"Manual","text":"Pending","category":"page"},{"location":"library/frames/#Frames-and-the-Frame-bundle-1","page":"Frames and the frame bundle","title":"Frames and the Frame bundle","text":"","category":"section"},{"location":"library/frames/#","page":"Frames and the frame bundle","title":"Frames and the frame bundle","text":"CurrentModule = Manifolds","category":"page"},{"location":"library/frames/#","page":"Frames and the frame bundle","title":"Frames and the frame bundle","text":"Frame\nTangentFrame\nΠ\nΠˣ\nHor","category":"page"},{"location":"library/frames/#Main.Manifolds.Frame","page":"Frames and the frame bundle","title":"Main.Manifolds.Frame","text":"Frame{Tx, Tν, TM}\n\nElements of mathrmF(ℳ) consist of a position x::Tx on ℳ<:EmbeddedManifold and a mathrmGL(d ℝ)-matrix ν::Tν that consists of column vectors that form a basis for T_xℳ. All input is assumed to be in local coordinates that coincide with F( ,ℳ).\n\nExample: A frame on the south pole on the sphere\n\njulia> 𝕊 = Sphere(1.0)\njulia> u = Frame([0. , 0.], [1. 0. ; 0.  1.], 𝕊)\njulia> u.x # returns [0. , 0.]\njulia> u.ν # returns [1. 0. ; 0. 1.]\n\n\n\n\n\n","category":"type"},{"location":"library/frames/#Main.Manifolds.TangentFrame","page":"Frames and the frame bundle","title":"Main.Manifolds.TangentFrame","text":"TangentFrame{Tx, Tν}\n\nA tangent vector (x ν)  T_umathrmF(ℳ). This object consists of the frame u::Frame that it is tangent to and the velocities ẋ and ν̇.\n\nExample:\n\njulia> 𝕊 = Sphere(1.0)\njulia> u = Frame([0. , 0.], [1. 0. ; 0.  1.], 𝕊)\njulia> V = TangentFrame(u, [1. 0.] , [-0.1 0. ; -0.5 1.])\n\n\n\n\n\n","category":"type"},{"location":"library/frames/#Main.Manifolds.Π","page":"Frames and the frame bundle","title":"Main.Manifolds.Π","text":"Π(u::Frame)\n\nCanonical projection Π mathrmF(ℳ)  ℳ that maps (xν) to x.\n\n\n\n\n\n","category":"function"},{"location":"library/frames/#Main.Manifolds.Πˣ","page":"Frames and the frame bundle","title":"Main.Manifolds.Πˣ","text":"Πˣ(X::TangentFrame)\n\nPushforward map of the canonocal projection Π^* TmathrmF(ℳ)  Tℳ that maps (x ν) to x\n\n\n\n\n\n","category":"function"},{"location":"library/frames/#Main.Manifolds.Hor","page":"Frames and the frame bundle","title":"Main.Manifolds.Hor","text":"Hor(i::Int64, u::Frame, ℳ::TM) where {TM<:EmbeddedManifold}\n\nReturns the horizontal vector H_i(u) in T_umathrmF(ℳ) as an element of type TangentFrame.\n\n\n\n\n\n","category":"function"},{"location":"library/library/#Library-1","page":"Library","title":"Library","text":"","category":"section"},{"location":"library/library/#","page":"Library","title":"Library","text":"pending","category":"page"},{"location":"#Documentation-for-Manifolds.jl-1","page":"Home","title":"Documentation for Manifolds.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Homepage","category":"page"},{"location":"library/geodesics/#Geodesics-1","page":"Geodesics","title":"Geodesics","text":"","category":"section"},{"location":"library/geodesics/#","page":"Geodesics","title":"Geodesics","text":"CurrentModule = Manifolds","category":"page"},{"location":"library/geodesics/#","page":"Geodesics","title":"Geodesics","text":"Geodesic\nExponentialMap\nParallelTransport","category":"page"},{"location":"library/geodesics/#Main.Manifolds.Geodesic","page":"Geodesics","title":"Main.Manifolds.Geodesic","text":"Geodesic(x₀::Tx, v₀::Tv, tt, ℳ::TM) where {Tx, Tv <: AbstractArray, TM<:EmbeddedManifold}\n\nReturns the values of the geodesic on ℳ starting at x₀ with initial velicity v₀ on a discretized time interval tt. All input is in local coordinates.\n\n\n\n\n\n","category":"function"},{"location":"library/geodesics/#Main.Manifolds.ExponentialMap","page":"Geodesics","title":"Main.Manifolds.ExponentialMap","text":"ExponentialMap(x₀::Tx, v₀::Tv, ℳ::TM) where {Tx, Tv <: AbstractArray, TM<:EmbeddedManifold}\n\nReturns as new element of ℳ that results from Exp_x_0v_0, where the point x₀ on ℳ and initial velocity v₀ are given in local coordinates.\n\n\n\n\n\n","category":"function"},{"location":"library/geodesics/#Main.Manifolds.ParallelTransport","page":"Geodesics","title":"Main.Manifolds.ParallelTransport","text":"ParallelTransport(γ, γ̇, V₀, tt, ℳ)\n\nreturns the parallel transport of an initial  vector V₀, tangent to ℳ at γ(0), along a curve γ. It is assumed γ and γ̇ are known on a discretized time interval tt\n\n\n\n\n\n","category":"function"}]
}
