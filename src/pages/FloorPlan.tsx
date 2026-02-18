import { Link, useNavigate, useParams } from "react-router-dom";
import { Tooltip, Button, Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useFloorStore } from "../store/useFloorStore";

export default function FloorPlan() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [zoomOpen, setZoomOpen] = useState(false);

    // Zustand State
    const { getFloorById, selectedUnitId, setSelectedUnit, hoveredUnitId, setHoveredUnit } = useFloorStore();
    const floor = getFloorById(id || "");

    if (!floor) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-[#5d5c61] text-white">
                <h2 className="text-2xl mb-4">Floor data not found</h2>
                <Button variant="outlined" color="inherit" onClick={() => navigate(-1)}>Go Back</Button>
            </div>
        );
    }

    const handleUnitClick = (unitId: string | number) => {
        const fullId = `${floor.id}-${unitId}`;
        setSelectedUnit(fullId);
        // You can navigate or open a detail panel here
        // navigate(`/unit/${fullId}`); 
    };

    return (
         <div className="flex gap-6 flex-col md:flex-row p-5 w-full h-screen overflow-hidden bg-gray-100">
            {/* Sidebar (Units List) */}
            <div className="md:w-[20%] w-full flex flex-col items-center justify-center border-r p-4">
                <h3 className="text-xl font-semibold mb-4">UNITS</h3>
                {floor.units.map((unit) => {
                    const uniqueId = `${floor.id}-${unit.id}`;
                    return (
                        <Button
                            key={uniqueId}
                            fullWidth
                            variant="contained"
                            sx={{
                                mb: 2,
                                backgroundColor:
                                    hoveredUnitId === uniqueId || selectedUnitId === uniqueId
                                        ? "black"
                                        : "#5d5c61",
                                "&:hover": { backgroundColor: "black" },
                                transition: "0.3s",
                            }}
                            onMouseEnter={() => setHoveredUnit(uniqueId)}
                            onMouseLeave={() => setHoveredUnit(null)}
                            onClick={() => setSelectedUnit(uniqueId)}
                        >
                            {unit.name} 
                        </Button>
                    );
                })}
                <div className="mt-3 space-x-2">
                    {Object.values(floor.buttonSettings).map((btn, idx) => (
                        <button
                            key={idx}
                            className="px-5 py-2 rounded-sm"
                            style={{ backgroundColor: btn.bgColor }}
                        >
                            {btn.text}
                        </button>
                    ))}
                </div>
            </div>

            {/* Center: Interactive SVG */}
            <div className="relative w-full md:h-screen flex items-center justify-center">
                <svg
                    viewBox={floor.imageSettings.svgSize}
                    className="w-full h-auto drop-shadow-2xl transition-transform duration-500"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <image
                        href={floor.image3D}
                        width={floor.imageSettings.imageWidth}
                        height={floor.imageSettings.imageHeight}
                    />
                    {floor.units.map((unit) => {
                        const uniqueId = `${floor.id}-${unit.id}`;
                        const isSelected = selectedUnitId === uniqueId;
                        const isHovered = hoveredUnitId === uniqueId;

                        return (
                            <Tooltip key={uniqueId} title={`${unit.name} (${unit.type})`} arrow placement="top">
                                <polygon
                                    points={unit.polygonPoints}
                                    transform="translate(0, 155)"
                                    fill={isSelected ? "rgba(255, 112, 67, 0.6)" : isHovered ? unit.hoverColor : "transparent"}
                                    stroke={isHovered || isSelected ? "white" : "transparent"}
                                    strokeWidth="2"
                                    className="cursor-pointer transition-all duration-300"
                                    onMouseEnter={() => setHoveredUnit(uniqueId)}
                                    onMouseLeave={() => setHoveredUnit(null)}
                                    onClick={() => handleUnitClick(unit.id)}
                                />
                            </Tooltip>
                        );
                    })}
                </svg>
            </div>

            {/* Right Sidebar */}
            <div className="md:w-[20%] w-full flex flex-col items-center justify-center border-r p-4">
                <Link to={`/explore_homes`} className="w-full">
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            mb: 2,
                            backgroundColor: "#5d5c61",
                            "&:hover": { backgroundColor: "black" },
                            transition: "0.3s",
                        }}
                    >
                        Go Back
                    </Button>
                </Link>

                <Button
                    className="w-full"
                    onClick={() => setZoomOpen(true)}
                    variant="outlined"
                    sx={{
                        borderColor: "#5d5c61",
                        color: "#b68534",
                        "&:hover": { borderColor: "#d4a373", color: "#d4a373" },
                    }}
                >
                    Zoom Image
                </Button>

                <div className="mt-3 p-2 border border-gray-300 rounded-sm w-full">
                    <h3 className="text-xl font-semibold mb-4">TOWER FEATURES</h3>
                    <ul className="list-disc list-inside space-y-2 mb-6 text-[12px]">
                        {floor.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Zoom Modal */}
            <Modal open={zoomOpen} onClose={() => setZoomOpen(false)}>
                <Box
                    className="flex items-center justify-center h-screen w-screen bg-black/80"
                    sx={{ outline: "none" }}
                >
                    <IconButton
                        onClick={() => setZoomOpen(false)}
                        sx={{
                            position: "absolute",
                            top: 20,
                            right: 20,
                            color: "white",
                            backgroundColor: "rgba(0,0,0,0.6)",
                            "&:hover": { backgroundColor: "rgba(0,0,0,0.9)" },
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <img
                        src={floor.image3D}
                        alt={`Floor ${floor.id}`}
                        className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
                    />
                </Box>
            </Modal>
        </div>
    );
}