import React, { useState } from "react";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  Tabs,
  Tab,
  Rating,
  SelectChangeEvent,
} from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
    </div>
  );
}

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState("standard");
  const [tabIndex, setTabIndex] = useState(0);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(event.target.value);
    if (val >= 1) setQuantity(val);
  };

  const handleVariantChange = (event: SelectChangeEvent) => {
    setVariant(event.target.value);
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Container flex para imagem e infos lado a lado */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          alignItems: "flex-start",
        }}
      >
        {/* Imagem do produto */}
        <Card sx={{ flex: 1 }}>
          <CardMedia
            component="img"
            image="/printer.jpg"
            alt="Produto Impressora 3D"
          />
        </Card>

        {/* Informações do produto */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Impressora 3D XYZ
          </Typography>

          <Rating value={4.5} precision={0.5} readOnly />

          <Typography variant="h5" color="primary" sx={{ mt: 2 }}>
            R$ 499,90
          </Typography>

          <Typography variant="body1" sx={{ mt: 2 }}>
            Impressora 3D XYZ com alta precisão e qualidade para seus projetos
            de impressão 3D, ideal para entusiastas e profissionais.
          </Typography>

          <Box sx={{ mt: 3, display: "flex", gap: 2, alignItems: "center" }}>
            <Typography>Variante:</Typography>
            <Select
              value={variant}
              onChange={handleVariantChange}
              size="small"
              sx={{ minWidth: 120 }}
            >
              <MenuItem value="standard">Standard</MenuItem>
              <MenuItem value="pro">Pro</MenuItem>
              <MenuItem value="deluxe">Deluxe</MenuItem>
            </Select>

            <TextField
              label="Quantidade"
              type="number"
              size="small"
              inputProps={{ min: 1 }}
              value={quantity}
              onChange={handleQuantityChange}
              sx={{ width: 100 }}
            />
          </Box>

          <Button variant="contained" color="primary" sx={{ mt: 3 }}>
            Adicionar ao Carrinho
          </Button>
        </Box>
      </Box>

      {/* Tabs abaixo */}
      <Box sx={{ mt: 6 }}>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          aria-label="Informações do produto"
        >
          <Tab label="Descrição" id="tab-0" aria-controls="tabpanel-0" />
          <Tab label="Avaliações" id="tab-1" aria-controls="tabpanel-1" />
          <Tab label="FAQ" id="tab-2" aria-controls="tabpanel-2" />
        </Tabs>

        <TabPanel value={tabIndex} index={0}>
          <Typography>
            A Impressora 3D XYZ oferece um mecanismo de alta precisão,
            facilidade de uso e materiais de qualidade para garantir resultados
            excepcionais.
          </Typography>
        </TabPanel>

        <TabPanel value={tabIndex} index={1}>
          <Typography>Nenhuma avaliação disponível no momento.</Typography>
        </TabPanel>

        <TabPanel value={tabIndex} index={2}>
          <Typography>Perguntas frequentes serão exibidas aqui.</Typography>
        </TabPanel>
      </Box>
    </Box>
  );
}
